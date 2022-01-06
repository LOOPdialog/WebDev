
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { onAuthStateChanged, getIdToken } from 'firebase/auth';
import { firebaseConfig } from '../getNewToken';
import { onError } from '@apollo/client/link/error';
import { Observable } from '@apollo/client';
import { GraphQLError } from 'graphql';

const errorLink = onError(({ graphQLErrors, networkError, operation, forward }) => {
  if (graphQLErrors) {
    firebase.initializeApp(firebaseConfig);
    for (const err of graphQLErrors) {
      switch (err.extensions.code) {
        case 'UNAUTHENTICATED':
          return new Observable((observer) => {
            try {
              onAuthStateChanged(firebase.auth(),
                (user): void => {
                  getIdToken(user, true) // eslint-disable-line @typescript-eslint/no-floating-promises
                    .then(token => {
                      window.localStorage.setItem('token', token);
                      const oldHeaders = operation.getContext().headers;
                      operation.setContext({
                        headers: {
                          ...oldHeaders,
                          authorization: token
                        }
                      });
                      const subscriber = {
                        next: observer.next.bind(observer),
                        error: observer.error.bind(observer),
                        complete: observer.complete.bind(observer)
                      };
                      forward(operation).subscribe(subscriber);
                    })
                    .catch((e) => { console.log('Refresh token failed', e); window.location.reload(); });
                });
            } catch (e) {
              console.log(e);
            }
          });
      }
    }
  }
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path, extensions, ...args }: GraphQLError | any) =>
      console.log(args, extensions.response?.statusCode,
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  }
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

export default errorLink;
