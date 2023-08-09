export function sliceAddress(address: string | any) {
    return (
      address.slice(0, 4) +
      "..." +
      address.slice(address.length - 4, address.length)
    );
  }
  