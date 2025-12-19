//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ METHOD 01                                                               │
//  ╰─────────────────────────────────────────────────────────────────────────╯
// the volume of cuboid
class Kata {
  static getVolumeOfCuboid(length, width, height) {
    return width * height * length;
  }
}
console.log(Kata.getVolumeOfCuboid(10, 10, 10));
