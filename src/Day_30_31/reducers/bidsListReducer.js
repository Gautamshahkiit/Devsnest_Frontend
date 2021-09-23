const defaultList = [];
const names = [
  "Sharique",
  "Amit",
  "Sanchez",
  "Akshansh",
  "Gauti",
  "Aditya",
  "Jitu",
  "Naman",
  "Kamal",
  "Anonymous",
  "Popeye",
];

for (let i = 0; i < 50; i++) {
  const bids = Math.floor(Math.random() * 4) + 1;
  const arr = [];
  const bidArr = [];
  var len = names.length;
  for (let j = 0; j < bids; j++) {
    const idx = Math.floor(Math.random() * len);
    const _name = names[idx];
    names[idx] = names[len - 1];
    names[len - 1] = _name;
    len--;
    let bid = (Math.trunc(Math.random() * 90 + 1) / 100).toFixed(2);
    while (bidArr.includes(bid)) {
      bid = (Math.trunc(Math.random() * 90 + 1) / 100).toFixed(2);
    }
    bidArr.push(bid);

    arr.push({
      name: _name,
      bid: bid,
    });
  }
  arr.sort(function (a, b) {
    return b.bid - a.bid;
  });
  defaultList.push(arr);
}
const bidsListReducer = (state = defaultList, action) => {
  if (action.type === "ADD_BID") {
    const list = [...state];
    list[action.payload.productId - 1].push(action.payload.entry);
    list[action.payload.productId - 1].sort(function (a, b) {
      return b.bid - a.bid;
    });
    return list;
  } else if (action.type === "INCREASE_BID") {
    const list = [...state];
    for (let i = 0; i < list[action.productId - 1].length; i++) {
      if (list[action.productId - 1][i].user) {
        list[action.productId - 1][i].bid =
          action.payload.bid
        return list;
      }
    }
    return state;
  }

  return state;
};
export default bidsListReducer;
