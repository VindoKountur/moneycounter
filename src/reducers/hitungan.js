// Fungsi untuk menambahkan item baru di daftar array yang diinginkan, dalam hal ini daftar hitungan dari state yang ada
function insertItem(array, action) {
  let newArray = array.slice();
  newArray.splice(newArray.lenght, 0, action.newHitungan);
  return newArray;
}

const hitunganReducer = (state = [], action) => {
  switch (action.type) {
    // Untuk menambah daftar hitungan
    case 'TAMBAHHITUNGAN':
      return insertItem(state, action);
    // Untuk menghapus satu daftar hitungan berdasarkan index yang dipilih
    case 'HAPUSHITUNGAN':
      return state.filter((item, index) => index !== action.index);
    default:
      return state;
  }
};

export default hitunganReducer;
