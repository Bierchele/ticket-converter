import { fetchImage } from "./../utils/getImage";
import { TextRow } from "..";
import { Image } from "../interfaces/image";
import { promisify } from "util";
const sizeOf = promisify(require("image-size"));
let url = "hallo";

export class QRProduct implements Image {
  type!: string;
  version!: string;
  originX!: string;
  originY!: string;
  left!: number;
  top!: number;
  width!: number;
  height!: number;
  fill!: string;
  stroke!: null;
  strokeWidth!: number;
  strokeDashArray!: null;
  strokeLineCap!: string;
  strokeDashOffset!: number;
  strokeLineJoin!: string;
  strokeUniform!: boolean;
  strokeMiterLimit!: number;
  scaleX!: number;
  scaleY!: number;
  angle!: number;
  flipX!: boolean;
  flipY!: boolean;
  opacity!: number;
  shadow!: null;
  visible!: boolean;
  backgroundColor!: string;
  fillRule!: string;
  paintFirst!: string;
  globalCompositeOperation!: string;
  skewX!: number;
  skewY!: number;
  cropX!: number;
  cropY!: number;
  src!: string;
  crossOrigin!: null | string;
  filters!: [];

  public async saveImage(name: string) {
    await fetchImage(
      "https://cdn.tiodev.de/assets/admin/img/ticketdesigneditor/qrcode.gif",
      name
    );
  }

  public setDimensions(intrinsicWidth: number, intrinsicHeight: number) {
    this.scaleX = this.width / intrinsicWidth;
    this.scaleY = this.height / intrinsicHeight;
    this.width = intrinsicWidth;
    this.height = intrinsicHeight;
  }

  public setSrc(src: string) {
    this.src = src;
  }

  constructor(textRowObj: TextRow) {
    this.type = "image";
    this.version = "4.5.1";
    this.originX = "left";
    this.originY = "top";
    this.left = textRowObj.left;
    this.top = textRowObj.top;
    this.width = textRowObj.width;
    this.height = textRowObj.width;
    this.fill = "#000000";
    this.stroke = null;
    this.strokeWidth = 1;
    this.strokeDashArray = null;
    this.strokeLineCap = "butt";
    this.strokeDashOffset = 0;
    this.strokeLineJoin = "miter";
    this.strokeUniform = false;
    this.strokeMiterLimit = 4;
    this.scaleX = 0;
    this.scaleY = 0;
    this.angle = 0;
    this.flipX = false;
    this.flipY = false;
    this.opacity = 1;
    this.shadow = null;
    this.visible = true;
    this.backgroundColor = "";
    this.fillRule = "nonzero";
    this.paintFirst = "fill";
    this.globalCompositeOperation = "source-over";
    this.skewX = 0;
    this.skewY = 0;
    this.cropX = 0;
    this.cropY != 0;
    this.src =
      "data:image/gif;base64,R0lGODlh9QD1AJEAAAAAAP///wsLCwAAACH5BAAHAP8ALAAAAAD1APUAAAL/lI+py+0PUZi0hohzsrxbDYZiBJTmiabqyrbuWwoeJcD2bcrzTuP+D2wZgsSiTzerGYlIXnIJjaKG0uqy2VFabVgnR7sN46jiMqz7MbvQ3p76vSLD5zEemF5ve+54tbzvZweYo7c3CPd3GMbmNsjYxqdolShZ9XiheOkUWRlF2Ql1yYlYmAW6OHrKJHioyaoq9QkbJPrwYitU+jUbmwqgCxwcsCY8kSq69vC6UtzsleziLD1DXHy8/IPcMs1tAb3dHV4tfL3jO24IHs79zbLejQ5c/rRqHv0+3c6MLx2vO5+OFrYU/PoJ8VXQmb9SAE3Vo+cuYTF9KiROzGUNI0Qg/9oiWgRGkeBHkBqDNdz1MOC+kaVComCpa2Ghk2lSOvQIs43LEzkLydRDs8K5kjdX9nSy08RRnUT/KTM34sDAl0uRHrxHzYxVFq6qZlSXtQyPpCXGajXL1WtBhGjFtFUhq+wONVvjqOXHdu7ZsHHyeqD7NkXXu/+w8g0TeIrfDoD1piW8bjHjvX+vgp0sNvGJwZCBGq6c+bBgyd4og7bbuRvp0qFPw11NobHoKalVf8bs1nHf26xz64Zbmxvs2KY5kP31e0td4MGlDZ8gG/dr3hWiSxfc3Dn16sV7T79svLt37NmbPR8mnjjX59bDP07yFGqDhOfbc1+/HXp69ag3kv+31x8+9e2HHn7gjWfFcv+ptCCDm9GXn36tXadYhPbdF2BRDWr44FoRFuiba6NZSCCIzPlH21R54PXhhRLudiCGiGlGCIAZclgjizHKqFxyFe744ow+dogikUWuKGCLBB5HYxQKpngkkg7mmCSQQfY422bslfiTMU2hdGKVOImY4JA5bDkhhUbiSOWUUkamZJoIakminHO2CWaYbgLAmTxxhqjmmXUCGuibH8QXZZ+FWWkilmTSaaWLV0JpEqJZWLromIVC0SSfaBLq3o0MDapnpkY9KkWncSGXZaqqmkfqhqMyKimTZjr56lea3mnoTH8KiWoMnwIbLJ+wRvqlr7T/LmnZrjyWeauxup4aaqmzOvtsFaoO62ixitaE7aRrmlpRp0tsGyu0rfbqGbLvmfRrt9WO6C6ovEpLTrrjXkvtvOpuuqq5Rjy5r7LhNkqpn8vayd93B0uKcMHtHgzBsQdH7Oq6nn5YVZdeDCWqbYx23Gy/kHm8iU1wjryUrc2hrOIZELJ8lMvBwWxjNjNfTLKBPLec7MQ6e0hzTzbXhnOUt+xsMmFHp5b0nksT/XPNJZf7ctCQqBzOeT3DWLXRWn/Mtchh5/R0Z1GzKTPVTd+V9sljpyyQ21jffLVIWb8rDy4hC8cx0D7zYkQtDtBt7aGH50w4EyA3PnZQQvHNNr5S/0N+xuOYJ94I550nXHlHm2ej+egSe0l5nqCrvvrkppP++tBKazIK7ZHHfkTpsYsuK7i9u/436rhzofvrvLcO/O+fIy/88LcUb/rxpzfPPPXVQz/6qs7j6bvy1nPf/fXbZz7+1LMj7j0mqSdfvsPte65+8N+zu/z02G8eVf76g2AHpl8szrjr7W+ABFRAeQ7YPwesDYEMbGC+yubACErwgXWboAUvSK4jYHCDHIxZ2zoIwhDe71shLGFqRmjCFF4QhSpsoQNZ6MIYlgeGMqzhCYtAQhtuwn+KK+AG5BMVD2ZuPmvhIVCMuLX1sc8SQvTY/RbIr/R5MIfzo18Vr9DE2/+JgYpkU2IS5Ye+9D1RixW8HA6ZJsUATi+M1YvfFqR3AziGAo1tnKLF4OfGSWTRi3lkot3qqEbwCU2MZZDjB80IwWlI7ot4tOMeOfJI+I2Rj85YZBfB6MhAzlGTh6xc4ei4xkzCi5KTlB8NPXnGP4aSk1y0ZB9jEUnvlbKR00rj+ayBxCs+D4B70F8sx0CfXO4wf+bxGySrIszC+TI7rvxlHL2SCoLNgYugFCQj9YjMhTlihnNzJhegqU1AUFOV1rzkG8F5MUmMU0eY5OQns5nOTHCTkt7sZE6iKbBCzrOdSnvnUvAZrUAws5vuTOU/w9mHdYqJlv006FEAqjGBNqf/mQVNpEUgWiyJBoeiDbWoRJIpz4EehIjuNJcPF3BHIOSTnkAUARufKcSVLiKlP5ApQxEJRuzZrl7ipKkPbGpLnOJRpy/lSUDN0MqBHZWgHc2pR7mFh6QWAaiAbOpQn6qvafoUB1RdpVUJWcbLddUTW73BWK1YVHuyDqYlXeoWy2qDs1pOYcesqFN5mlC4wkCuUq3rV9sIVTr0NQh81evcfCHMwGq1ljV1Kz97qUBSMlWoKi1iVF7QjCvwcpRXZelff1oQiMkViuEr5ytNW8+9hrZEo53snnb6WFROdbUMY8pbywrbm8qWCAkRrWNlR0GwxnatGcOHbyPqUM4KV7fE/8UVP46b0eTSdblB3S1haWsvPSC1kpL1LGUb+1zW/laDuE3rXDOoLewSKyb6LK8opysvcYgXuR5NK+2EmdqKqTe+PmkvY1GbwBFIt7mqDai5pCkXA7dUBK61Ljbt+jZxGTWiCGYVhccLTMPeFsJ3y+iBO1VhC2/Kn8GNqnkx++ELRyvErfXud2GZWhYreMUpjm59Uzvg0pq1xiOusIzpG1b4CvbE8dKbh0HMY3/B+L+kiHGS7yXiTf3YxkFGb5M5bOQjq1hjUx5xjg2WVyfPWMtcfnK2yKrhmYp5yz1G8pi9fOMFnzSxxDRzwzosZTtL+ExB1KGQqUJjDE+YzUoGsP+fzRZhjCUYyIlGscYUeuhrZjnPglaKnhV93kiT09KBZjSeC81pb2l6JAOKJ28vTdpRWznUxQpxkQEtalV/9NWshrOpH9ZgWa960a2Wa5dBnWldI/rT93I1Qid9L0gLm8BRBraxbx3hVC97mCQtc6V53Wb4bDYyc+72CNJ83Ws3m1fK/p8x31fVF3PV100qt46Fhe7hvptT7L6Vu5cIqXin28Hg9TSyyV1NeOt738xWqrgRfO/6CWrgXlX3jg/e7oBvjOGGdnhc672uhF9Re+MbLH/PfHF7S5zj2/P4v2zdaBfvmuTOM3l6IS7yTU+c4sEe5MmB7eiMj3yWs3B5can/nHJ5zwQCgbMaH4k+24tAm9g0oHO1xZodJ87X2oROtn1PXB6p19a2Qcd1dzt7NphoPbvaPTasAXb1mEadjOtl79L/fWfAfj3RX5Pk1Hv9ZmDnVu5FQxvbP172t59d72lv695MeXdKVx3kNVd443WZ9b/fvCVmHzTaY7Z3uMNN8i8XBq1rbXXMY33tR0+8s1F92LkzffOl3/ozKg96xmfetIp17qNxbHCq9wTp6zm35jF9rlx9tvN4Nzoqsmr7WA//54oX2xZrT+9oGfINPq77JKAffOnjPum69/vzkR/922N58oz3ClKxn3vlWzz8xXf+8fFK/rjbTxLVF9z7vU72/z0/nuf9br/37x9tXMJ5dFB/xvdG6Md96ncpkTVSDJBz/id2OMR7Aeh60nZaVlRqdKd0amZ4QFdZ2sdkGPh548YO/tVPLSZ4FRc6atdp77BdLOiB/Xd5JSY+sEeC+WCCUOdvoAWCNDh/NthbOehJKNh1zDVv01eALiiEzEaEq6d/PieCQLhfftSBKPeB4ueD5ZSBTqgQSzhvNwh86TeDyiVLIxiEG3aC4vaAY/hnWmiGU7hkabiD69aDZFiDKYht8oWGOhiDPIiFdmg/IBV2lLeHQ6iGI2g4DWCBCOh6AaaI8Ed8bFhwuYZvlodz0AUwjBhuf8hvBPeFTSiDhAg2FP+Yf5g2fYsIftS3ge7jhBAzdn7VhrEnfwS4ivSCf20XesuHVjBohYD3eoPTigLYelUGZsGoCJmVN4MHZWJIeOPXcIY4h8wniqz4e644gN8UgnnIeKroecloicuYgJL4hagIibTYjcBYjcKIeHHGh70Yf784isZYik7ke55YibKof0P0bbX4I4M4EuQodI73BlCoWUXnfkZ4j49HZF5oc71gkP+HkAJJkBoViwXZdxGockcIbueUjcr0kBgZkBu3kQ8GiJ7gNfYXkSLZkS+YhaFwkgZYXQQ2kSxZki75kSwBkCl5gQM5kmPwkgcZkxq5kgwpaQ55kThJiRLZk3FYkR6teZT/mJQqSQ71qCUMGJI76SmPiI76RpAad4GzV5UMYF6GxHLD05UBB5ZqJZSzw3+qcJablpbmc0tsSXO7yEpouZB3tY7xOHBvyU7UlWF3yUpteQp+uVB8B4srOJh1qZDvtTJgB1xSQ5aECQqG+Q61k5eQWYZbGW+W+ZiAyVZzKZmU2Qme2TWqF5iiGTqkWQmmOWxrRFSOeYTeRpv8g0vb1jW42UMu5YgoJWcJUAAAOw==";
    this.crossOrigin = null;
    this.filters = [];
  }
}
