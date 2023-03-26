(Scratch => {
  'use strict';

  const icon = 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyMjUuMzU0OCIgaGVpZ2h0PSIyMjUuMzU0OCIgdmlld0JveD0iMCwwLDIyNS4zNTQ4LDIyNS4zNTQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjA3LjMyMjgsLTY3LjMyMjYpIj48ZyBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0yMDcuMzIyODEsMTgwYzAsLTYyLjIzMDAxIDUwLjQ0NzM5LC0xMTIuNjc3NCAxMTIuNjc3NCwtMTEyLjY3NzRjNjIuMjMwMDEsMCAxMTIuNjc3NCw1MC40NDczOSAxMTIuNjc3NCwxMTIuNjc3NGMwLDYyLjIzMDAxIC01MC40NDczOSwxMTIuNjc3NCAtMTEyLjY3NzQsMTEyLjY3NzRjLTYyLjIzMDAxLDAgLTExMi42Nzc0LC01MC40NDczOSAtMTEyLjY3NzQsLTExMi42Nzc0eiIgZmlsbD0iIzU5YzA1OSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjAiLz48cGF0aCBkPSJNMzk0LjEzMDk3LDEzMi41MDkyN2wtMzUuMjQ3NTIsLTAuMDQ5MjNjLTAuOTQyMDgsNDEuNDQ4ODkgLTIxLjE1OTAxLDk0LjU5NzU0IDcuNDYwMzgsOTQuMjEzMzljMTAuNTAwMTgsLTAuNDQ4MTggMTEuMDYzNDgsLTE2LjA2MTEgMTAuODI1NjgsLTI2LjMwNTE4bDE5LjIyODE0LDEzLjM2NjY3YzAsMTIuNDIwOTQgLTEwLjE0MTgxLDM0Ljg1MjU0IC0zNS4xMTE3NCwzNC4wMjAyYy0xNS4xNzQwMywtMC4xMjgwNSAtMjkuNDQ4NjIsLTExLjI0NDA4IC0yOS44MzI3OCwtMzAuMTk1NjJjMC41MTIyLC0yOC40OTEzMyA2LjMwODAyLC01Ni4zMDg4OSA3Ljk3MjY3LC04NS4zNzY0NWwtMjYuMDA4NDUsLTAuNTY0MjhjLTcuNTU1LDgyLjQ2NDggLTEwLjI2NjU3LDExNS40OTYxIC0zNC41MzIyMiwxMTYuMzI4NDNjLTcuNjgzMDYsLTAuMzIwMTIgLTE0Ljc4OTg4LC01LjgyNjMyIC0xNS41NTgxOSwtMTQuNzg5ODhjLTIuMTEyODQsLTE1LjgxNDI5IDMwLjY5MjYxLC0yNS4xNTk4MSAzMS44NDUwNiwtMTAyLjI0NjQ3Yy0zMS42OTI2MSwtMy41MjE0IC0zMS44MDU0NSwxNS42ODQwMyAtMzcuMTgzNTgsMjEuNzY2NDVsLTE0LjM4NjA2LC0xLjU4NDE1YzE4Ljc2NTU4LC00NC45NDMyNiA5LjQ1ODI5LC0zOS4xMTU4NCAxNTAuNzY1MTIsLTM4LjQzMTM1eiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjNTljMDU5IiBzdHJva2Utd2lkdGg9IjIuNSIvPjwvZz48L2c+PC9zdmc+PCEtLXJvdGF0aW9uQ2VudGVyOjExMi42NzcxOTQ5OTk5OTk5ODoxMTIuNjc3NDA1LS0+';

  const cast = Scratch.Cast;

  const isNotActuallyZero = val => {
    if (typeof val !== 'string') return false;
    for (let i = 0; i < val.length; i++) {
      const code = val.charCodeAt(i);
      // '0'.charCodeAt(0) === 48
      // '\t'.charCodeAt(0) === 9
      // We include tab for compatibility with scratch-www's broken trim() polyfill.
      // https://github.com/TurboWarp/scratch-vm/issues/115
      // https://scratch.mit.edu/projects/788261699/
      if (code === 48 || code === 9) {
        return false;
      }
    }
    return true;
  };

  const exactlyCompare = (v1, v2) => {
    let n1 = Number(v1);
    let n2 = Number(v2);
    if (n1 === 0 && isNotActuallyZero(v1)) {
      n1 = NaN;
    } else if (n2 === 0 && isNotActuallyZero(v2)) {
      n2 = NaN;
    }
    if (isNaN(n1) || isNaN(n2)) {
      // At least one argument can't be converted to a number.
      // Scratch compares strings as case insensitive, but it shouldn't be here
      const s1 = String(v1);
      const s2 = String(v2);
      if (s1 < s2) {
        return -1;
      } else if (s1 > s2) {
        return 1;
      }
      return 0;
    }
    // Handle the special case of Infinity
    if (
      (n1 === Infinity && n2 === Infinity) ||
      (n1 === -Infinity && n2 === -Infinity)
    ) {
      return 0;
    }
    // Compare as numbers.
    return n1 - n2;
  };

  const toNaNNumber = value => {
    // If value is already a number we don't need to coerce it with
    // Number().
    if (typeof value === 'number') {
      // Scratch treats NaN as 0, when needed as a number, but it shouldn't be here
      // E.g., 0 + NaN -> 0.
      return value;
    }
    const n = Number(value);
      // Scratch treats NaN as 0, when needed as a number, but it shouldn't be here
      // E.g., 0 + NaN -> 0.
    return n;
  };

  const isTrueInt = val => {
    // Values that are already numbers.
    if (typeof val === 'number') {
      if (isNaN(val)) { // NaN is considered an integer.
        return true;
      }
      // True if it's "round" (e.g., 2.0 and 2).
      return val === Math.floor(val);
    } else if (typeof val === 'boolean') {
      // `True` and `false` always represent integer after Scratch cast.
      return true;
    } else if (typeof val === 'string') {
      // If it contains a decimal point, don't consider it an int, but it shouldn't be here
      const n = Number(val);
      if (isNaN(n)) { // NaN is considered an integer.
        return true;
      }
      // True if it's "round" (e.g., 2.0 and 2).
      return n === Math.floor(n);
    }
    return false;
  };

  const round2 = (val, dig) => {
    let n = Math.floor(dig);
    if (n >= 1) {
      n = Math.pow(10, n);
      if (n !== Infinity) {
        return Math.round(val * n) / n;
      }
      return val;
    }
    return Math.round(val);
  };

  const floor2 = (val, dig) => {
    let n = Math.floor(dig);
    if (n >= 1) {
      n = Math.pow(10, n);
      if (n !== Infinity) {
        return Math.floor(val * n) / n;
      }
      return val;
    }
    return Math.floor(val);
  };

  const ceiling2 = (val, dig) => {
    let n = Math.floor(dig);
    if (n >= 1) {
      n = Math.pow(10, n);
      if (n !== Infinity) {
        return Math.ceil(val * n) / n;
      }
      return val;
    }
    return Math.ceil(val);
  };

  const trunc2 = (val, dig) => {
    let n = Math.floor(dig);
    if (n >= 1) {
      n = Math.pow(10, n);
      if (n !== Infinity) {
        return Math.trunc(val * n) / n;
      }
      return val;
    }
    return Math.trunc(val);
  };

  class ScratchMath {

    getInfo() {
      return {

        id: 'truefantommath',
        name: 'Math',

        color1: '#59c059',

        menuIconURI: icon,

        blocks: [
          {
            opcode: 'exponent_block',
            blockType: Scratch.BlockType.REPORTER,
            text: '[A] ^ [B]',
            arguments: {
              A: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '\n'
              },
              B: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '\n'
              }
            }
          },
          {
            opcode: 'root_block',
            blockType: Scratch.BlockType.REPORTER,
            text: '[A] √ [B]',
            arguments: {
              A: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '\n'
              },
              B: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '\n'
              }
            }
          },
          {
            opcode: 'negative_block',
            blockType: Scratch.BlockType.REPORTER,
            text: '- [A]',
            arguments: {
              A: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '\n'
              }
            }
          },
          '---',
          {

            opcode: 'random2_block',

            blockType: Scratch.BlockType.REPORTER,

            text: 'pick random [A] to [B] with [C] digits after dot',

            arguments: {

              A: {

                type: Scratch.ArgumentType.NUMBER,

                defaultValue: '\n'

              },

              B: {

                type: Scratch.ArgumentType.NUMBER,

                defaultValue: '\n'

              },
              C: {

                type: Scratch.ArgumentType.NUMBER,

                defaultValue: '1'

              }

            }

          },
          '---',
          {
            opcode: 'more_or_equal_block',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[A] ≥ [B]',
            arguments: {
              A: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '\n'
              },
              B: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 50
              }
            }
          },
          {
            opcode: 'less_or_equal_block',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[A] ≤ [B]',
            arguments: {
              A: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '\n'
              },
              B: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 50
              }
            }
          },
          { 
            opcode: 'not_equal_block',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[A] ≠ [B]',
            arguments: {
              A: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '\n'
              },
              B: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 50
              }
            }
          },
          { 
            opcode: 'exactly_equal_block',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[A] ≡ [B]',
            arguments: {
              A: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '\n'
              },
              B: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 50
              }
            }
          },
          { 
            opcode: 'not_exactly_equal_block',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[A] ≢ [B]',
            arguments: {
              A: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '\n'
              },
              B: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 50
              }
            }
          },
          { 
            opcode: 'almost_equal_block',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[A] ≈ [B]',
            arguments: {
              A: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '\n'
              },
              B: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 50
              }
            }
          },
          { 
            opcode: 'not_almost_equal_block',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[A] ≉ [B]',
            arguments: {
              A: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '\n'
              },
              B: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 50
              }
            }
          },
          '---',
          {
            opcode: 'nand_block',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[A] nand [B]',
            arguments: {
              A: {
                type: Scratch.ArgumentType.BOOLEAN,
              },
              B: {
                type: Scratch.ArgumentType.BOOLEAN,
              }
            }
          },
          {
            opcode: 'nor_block',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[A] nor [B]',
            arguments: {
              A: {
                type: Scratch.ArgumentType.BOOLEAN,
              },
              B: {
                type: Scratch.ArgumentType.BOOLEAN,
              }
            }
          },
          {
            opcode: 'xor_block',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[A] xor [B]',
            arguments: {
              A: {
                type: Scratch.ArgumentType.BOOLEAN,
              },
              B: {
                type: Scratch.ArgumentType.BOOLEAN,
              }
            }
          },
          {
            opcode: 'xnor_block',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[A] xnor [B]',
            arguments: {
              A: {
                type: Scratch.ArgumentType.BOOLEAN,
              },
              B: {
                type: Scratch.ArgumentType.BOOLEAN,
              }
            }
          },
          '---',
          {
            opcode: 'exactly_cont_block',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[A] exactly contains [B] ?',
            arguments: {
              A: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'apple'
              },
              B: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'a'
              }
            }
          },
          '---',
          {
            opcode: 'is_multiple_of_block',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[A] is multiple of [B] ?',
            arguments: {
              A: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '\n'
              },
              B: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '\n'
              }
            }
          },
          '---',
          {
            opcode: 'round2_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'round [A] with [B] digits after dot',
            arguments: {
              A: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '\n'
              },
              B: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '1'
              }
            }
          },
          {
            opcode: 'floor2_ceiling2_block',
            blockType: Scratch.BlockType.REPORTER,
            text: '[C] of [A] with [B] digits after dot',
            arguments: {
              A: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '\n'
              },
              B: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '1'
              },
              C: {
                type: Scratch.ArgumentType.NUMBER,
                menu: 'floor2_ceiling2_menu'
              }
            }
          },
          '---',
          {
            opcode: 'trunc2_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'trunc of [A] with [B] digits after dot',
            arguments: {
              A: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '\n'
              },
              B: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '1'
              }
            }
          },
          {
            opcode: 'trunc_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'trunc of [A]',
            arguments: {
              A: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '\n'
              }
            }
          },
          '---',
          {
            opcode: 'log_with_base_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'log of [A] with base [B]',
            arguments: {
              A: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '\n'
              },
              B: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 10
              }
            }
          },
          {
            opcode: 'fround_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'fround of [A]',
            arguments: {
              A: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '\n'
              }
            }
          },
          {
            opcode: 'sign_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'sign of [A]',
            arguments: {
              A: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '\n'
              }
            }
          },
          '---',
          {
            opcode: 'exponential_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'exponential of [A]',
            arguments: {
              A: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '\n'
              }
            }
          },
          {
            opcode: 'text_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'text of [A]',
            arguments: {
              A: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '\n'
              }
            }
          },
          '---',
          {
            opcode: 'is_number_block',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'is number [A] ?',
            arguments: {
              A: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '\n'
              }
            }
          },
          {
            opcode: 'is_int_block',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'is int [A] ?',
            arguments: {
              A: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '\n'
              }
            }
          },
          {
            opcode: 'is_float_block',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'is float [A] ?',
            arguments: {
              A: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '\n'
              }
            }
          },
          '---',
          {
            opcode: 'is_safe_number_block',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'is safe number [A] ?',
            arguments: {
              A: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '\n'
              }
            }
          },
          {
            opcode: 'epsilon_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'epsilon'
          },
          {
            opcode: 'max_safe_number_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'max safe number'
          },
          {
            opcode: 'nearest_to_infinity_number_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'nearest to infinity number'
          },
          {
            opcode: 'nearest_to_zero_number_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'nearest to zero number'
          },
          '---',
          {
            opcode: 'pi_block',
            blockType: Scratch.BlockType.REPORTER,
            text: '𝜋'
          },
          {
            opcode: 'tau_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'τ'
          },
          {
            opcode: 'e_block',
            blockType: Scratch.BlockType.REPORTER,
            text: '𝘦'
          },
          {
            opcode: 'phi_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'φ'
          },
          {
            opcode: 'plastic_number_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'ρ'
          },
          {
            opcode: 'euler_constant_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'γ'
          },
          {
            opcode: 'omega_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'Ω'
          },
          {
            opcode: 'infinity_block',
            blockType: Scratch.BlockType.REPORTER,
            text: '∞'
          }
        ],
        menus: {
          floor2_ceiling2_menu: {
            acceptReporters: false,
            items: ['floor', 'ceiling']
          }
        }
      };
    }

    exponent_block({A, B}) {
      return Math.pow(cast.toNumber(A), cast.toNumber(B));
    }
    root_block({A, B}) {
      return Math.pow(cast.toNumber(B), (1 / cast.toNumber(A)));
    }
    negative_block({A}) {
      return 0 - cast.toNumber(A);
    }
    random2_block({A, B, C}) {

      const nFrom = Cast.toNumber(A);

      const nTo = Cast.toNumber(B);

      const low = nFrom <= nTo ? nFrom : nTo;

      const high = nFrom <= nTo ? nTo : nFrom;

      if (low === high) {
        return low;
      }

  


      return trunc2((low + Math.floor(Math.random() * ((high + 1) - low))), Cast.toNumber(C));




    }
    more_or_equal_block({A, B}) {
      return cast.compare(A, B) >= 0;
    }
    less_or_equal_block({A, B}) {
      return cast.compare(A, B) <= 0;
    }
    not_equal_block({A, B}) {
      return cast.compare(A, B) !== 0;
    }
    exactly_equal_block({A, B}) {
      return exactlyCompare(A, B) === 0;
    }
    not_exactly_equal_block({A, B}) {
      return exactlyCompare(A, B) !== 0;
    }
    almost_equal_block({A, B}) {
      const c = cast.compare(A, B);
      return c <= 0.5 && c >= -0.5;
    }
    not_almost_equal_block({A, B}) {
      const c = cast.compare(A, B);
      return !(c <= 0.5 && c >= -0.5);
    }
    nand_block({A, B}) {
      return !(cast.toBoolean(A) && cast.toBoolean(B));
    }
    nor_block({A, B}) {
      return !(cast.toBoolean(A) || cast.toBoolean(B));
    }
    xor_block({A, B}) {
      return cast.toBoolean(A) !== cast.toBoolean(B);
    }
    xnor_block({A, B}) {
      return cast.toBoolean(A) === cast.toBoolean(B);
    }
    exactly_cont_block({A, B}) {
      return cast.toString(A).includes(cast.toString(B));
    }
    is_multiple_of_block({A, B}) {
      return cast.toNumber(A) % cast.toNumber(B) === 0;
    }
    round2_block({A, B}) {
      return round2(cast.toNumber(A), cast.toNumber(B));
    }
    floor2_ceiling2_block({A, B, C}) {
      const mode = cast.toString(C).toLowerCase();
      switch (mode) {
        case 'floor': return floor2(cast.toNumber(A), cast.toNumber(B));
        case 'ceiling': return ceiling2(cast.toNumber(A), cast.toNumber(B));
      }
      return 0;
    }
    trunc2_block({A, B}) {
      return trunc2(cast.toNumber(A), cast.toNumber(B));
    }
    trunc_block({A}) {
      return Math.trunc(cast.toNumber(A));
    }
    log_with_base_block({A, B}) {
      return Math.log(cast.toNumber(A)) / Math.log(cast.toNumber(B));
    }
    fround_block({A}) {
      return Math.fround(cast.toNumber(A));
    }
    sign_block({A}) {
      return Math.sign(cast.toNumber(A));
    }
    exponential_block({A}) {
      return cast.toNumber(A).toExponential();
    }
    text_block({A}) {
      return cast.toNumber(A).toLocaleString();
    }
    is_number_block({A}) {
      return !Number.isNaN(toNaNNumber(A));
    }
    is_int_block({A}) {
      return isTrueInt(A) && !Number.isNaN(toNaNNumber(A));
    }
    is_float_block({A}) {
      return !isTrueInt(A) && !Number.isNaN(toNaNNumber(A));
    }
    is_safe_number_block({A}) {
      return Number.isSafeInteger(cast.toNumber(A));
    }
    epsilon_block() {
      return Number.EPSILON;
    }
    max_safe_number_block() {
      return Number.MAX_SAFE_INTEGER;
    }
    nearest_to_infinity_number_block() {
      return Number.MAX_VALUE;
    }
    nearest_to_zero_number_block() {
      return Number.MIN_VALUE;
    }
    pi_block() {
      return Math.PI;
    }
    tau_block() {
      return Math.PI * 2;
    }
    e_block() {
      return Math.E;
    }
    phi_block() {
      return 1.618033988749895;
    }
    plastic_number_block() {
      return 1.324717957244746;
    }
    euler_constant_block() {
      return 0.577215664901533;
    }
    omega_block() {
      return 0.567143290409784;
    }
    infinity_block() {
      return Infinity;
    }
  }

  Scratch.extensions.register(new ScratchMath());
})(Scratch);
