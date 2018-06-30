export default class Lexer {
  public tokenList: [TokenType, TokenValueType][] = [];
  private state: TokenType = TokenType.Other;
  private pos: number = 0;

  constructor(private source: string) {}

  private process(source: string) {
    for (let i = 0; i < source.length; ++i) {
      const char = source[i];
      const token = this.readToken(char);

      // 空白は無視
      if (token === TokenType.Space) {
        continue;
      }

      // 数字っぽいリテラルとダブルクォートは
      if (token !== TokenType.Number && token !== TokenType.Quote) {
      }
    }
  }

  private readToken(char: string): TokenType {
    switch (char) {
      case "(":
        return TokenType.BracketOpen;
      case ")":
        return TokenType.BracketClose;
      case " ":
      case "\t":
      case "\n":
        return TokenType.Space;
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        return TokenType.Number;
      case '"':
        return TokenType.Quote;
      default:
        return TokenType.Other;
    }
  }

  private num(literal: string) {}
}

type TokenValueType = "(" | ")" | number | string;

enum TokenType {
  BracketOpen,
  BracketClose,
  Quote,
  Space,
  Number,
  String,
  Other
}

type a = [number, number];
