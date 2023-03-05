(Scratch => {
  'use strict';

  const cast = Scratch.Cast;

  class Compares {

    getInfo() {
      return {

        id: 'nonamecompares',
        name: 'Compares',

        color1: '#00a889',
        color2: '#1e8c76',
        color3: '#1e8c76',

        blocks: [
          {
            opcode: 'equal_negative',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[a] = - [b]',
            arguments: {
              a: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '\n'
              },
              b: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '\n'
              },
            }
          },
          {
            opcode: 'not_equal_negative',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[a] ≠ - [b]',
            arguments: {
              a: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '\n'
              },
              b: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '\n'
              },
            }
          },
          {
            opcode: 'equal_pon',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[a] = ± [b]',
            arguments: {
              a: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '\n'
              },
              b: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '\n'
              },
            }
          },
          {
            opcode: 'not_equal_pon',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[a] ≠ ± [b]',
            arguments: {
              a: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '\n'
              },
              b: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '\n'
              },
            }
          },
          '---',
          {
            opcode: 'dl1',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[a] > [b] > [c]',
            arguments: {
              a: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '\n'
              },
              b: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '\n'
              },
              c: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '\n'
              },
            }
          },
          {
            opcode: 'dl2',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[a] ≥ [b] ≥ [c]',
            arguments: {
              a: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '\n'
              },
              b: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '\n'
              },
              c: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '\n'
              },
            }
          },
          {
            opcode: 'dl3',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[a] < [b] < [c]',
            arguments: {
              a: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '\n'
              },
              b: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '\n'
              },
              c: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '\n'
              },
            }
          },
          {
            opcode: 'dl4',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[a] ≤ [b] ≤ [c]',
            arguments: {
              a: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '\n'
              },
              b: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '\n'
              },
              c: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '\n'
              },
            }
          },
          {
            opcode: 'dl5',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[a] = [b] = [c]',
            arguments: {
              a: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '\n'
              },
              b: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '\n'
              },
              c: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '\n'
              },
            }
          },
          {
            opcode: 'dl6',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[a] ≠ [b] ≠ [c]',
            arguments: {
              a: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '\n'
              },
              b: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '\n'
              },
              c: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '\n'
              },
            }
          },
          {
            opcode: 'dl7',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[a] ≡ [b] ≡ [c]',
            arguments: {
              a: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '\n'
              },
              b: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '\n'
              },
              c: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '\n'
              },
            }
          },
          {
            opcode: 'dl8',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[a] ≢ [b] ≢ [c]',
            arguments: {
              a: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '\n'
              },
              b: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '\n'
              },
              c: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '\n'
              },
            }
          },
          '---',
          {
            opcode: 'dl9',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[a] ≈ [b] ≈ [c]',
            arguments: {
              a: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '\n'
              },
              b: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '\n'
              },
              c: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '\n'
              },
            }
          },
          {
            opcode: 'dl0',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[a] ≉ [b] ≉ [c]',
            arguments: {
              a: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '\n'
              },
              b: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '\n'
              },
              c: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '\n'
              },
            }
          },
        ]
      }
    }

    equal_negative(args) {
      if(isNaN(args.a)||isNaN(args.b)){
        return "NaN";
      }
      else{
        return (args.a == (0 - args.b));
      }
    }
    equal_pon(args) {
      if(isNaN(args.a)||isNaN(args.b)){
        return "NaN";
      }
      else{
        return (args.a == (0 - args.b))||(args.a == args.b);
      }
    }
    dl(args) {
      return (args.a < args.b) && (args.b < args.c);
    }
  }

  Scratch.extensions.register(new Compares());
})(Scratch);