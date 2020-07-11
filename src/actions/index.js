export const tambahHitungan = (newHitungan) => ({
  type: 'TAMBAHHITUNGAN',
  newHitungan,
});

export const hapusHitungan = (index) => ({
  type: 'HAPUSHITUNGAN',
  index,
});
