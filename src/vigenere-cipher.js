/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }

  encrypt(message, key) {
    return this.transform(message, key, 1);
  }

  decrypt(encryptedMessage, key) {
    return this.transform(encryptedMessage, key, -1);
  }

  transform(message, key, direction) {
    if (message === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }

    const alphabetStart = 'A'.charCodeAt(0);
    const alphabetLength = 26;
    const keyword = key.toUpperCase();
    let keyIndex = 0;

    const result = Array.from(message.toUpperCase(), (character) => {
      if (!/^[A-Z]$/.test(character)) {
        return character;
      }

      const shift = keyword.charCodeAt(keyIndex % keyword.length) - alphabetStart;
      const position = character.charCodeAt(0) - alphabetStart;
      keyIndex += 1;
      const shiftedPosition = (position + direction * shift + alphabetLength) % alphabetLength;
      return String.fromCharCode(alphabetStart + shiftedPosition);
    });

    return (this.direct ? result : result.reverse()).join('');
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
