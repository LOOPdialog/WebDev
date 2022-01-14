export interface StepsInfo {
  headerTitle?: string;
  itemParagraph: Array<{
    title: string;
    text: string;
  }> | [];
}

export const WhatsaapStepInfo: StepsInfo = {
  headerTitle: 'Anleitung',
  itemParagraph: [{
    title: 'WhatsApp Business API erstellen',
    text: 'Folgen Sie der Anleitung zum erstellen eines WhatsApp Business API Kontos bei unserem Partner 360 Dialog. Sie können eine bestehende Nummer nutzen oder eine Neue erstellen.'
  }]
};

export const EmailStepInfo: StepsInfo = {
  headerTitle: 'Anleitung',
  itemParagraph: [
    {
      title: 'Schritt 1',
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores.'
    },
    {
      title: 'Schritt 2',
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores.'
    },
    {
      title: 'Schritt 3',
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores.'
    }
  ]
};
