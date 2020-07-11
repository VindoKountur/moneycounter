import hitunganReducer from './hitungan';

import { combineReducers } from 'redux';

// Menggabungkan semua reducer yang ada dalam aplikasi
const allReducers = combineReducers({
  hitungan: hitunganReducer,
});

export default allReducers;
