enum MessageTypes {
  YELLING,
  QUESTION,
  YELLED_QUESTION,
  SILENCE,
  DEFAULT
}

class MessageResponder {
  private type: MessageTypes
  private readonly responses = {
    [MessageTypes.YELLING]: 'Whoa, chill out!',
    [MessageTypes.QUESTION]: 'Sure.',
    [MessageTypes.SILENCE]: 'Fine. Be that way!',
    [MessageTypes.YELLED_QUESTION]: 'Calm down, I know what I\'m doing!',
    [MessageTypes.DEFAULT]: 'Whatever.'
  };

  constructor(message: string) {
    this.type = this.setType(message);
  }

  public respond(): string {
    return this.responses[this.type];
  }

  private setType(message: string): MessageTypes {
    //#region inspired by https://exercism.org/tracks/typescript/exercises/bob/solutions/Imsiaw
    const msg = message.trim();

    if (msg === '') {
      return MessageTypes.SILENCE;
    }

    const isYelling = /^(?=.*?[A-Z]).[A-Z\W\d]+$/.test(message);
    const isQuestion = /\?$/.test(msg);
    if (isYelling) {
      if (isQuestion) {
        return MessageTypes.YELLED_QUESTION;
      }

      return MessageTypes.YELLING;
    }

    if (isQuestion) {
      return MessageTypes.QUESTION;
    }

    return MessageTypes.DEFAULT;
    //#endregion
  }
}

export function hey(message: string): string {
  const responder = new MessageResponder(message);
  return responder.respond();
}
