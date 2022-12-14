class Phrase {
  constructor(
    id,
    description,    
    phrasePt,
    phraseEn,
    audio
  ) {
    (this.id = id),
    (this.description = description),
    (this.phraseEn = phraseEn),
    (this.phrasePt = phrasePt),
    (this.audio = audio);
  }
}

export default Phrase;