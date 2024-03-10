export const items = [
  { id: "0", name: "Marcos", phone: "111 111 111", favorite: false },
  { id: "1", name: "Lena", phone: "111 111 222", favorite: true },
];

export function getContact(id) {
  return items.find((item) => item.id === id);
}
