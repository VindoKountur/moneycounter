import React, { useState } from 'react';
import './style.css';

import { useSelector, useDispatch } from 'react-redux';

import { hapusHitungan } from '../../actions';

const Hitungan = ({ nilai, index }) => {
  // State untuk melihat rincian dari daftar tertentu
  const [showRincian, setShowRincian] = useState(false);

  // Menggunakan hook untuk dispatch
  const dispatch = useDispatch();

  const {
    tanggal,
    seratusRibu,
    limapuluhRibu,
    duapuluhRibu,
    sepuluhRibu,
    limaRibu,
    duaRibu,
    seribu,
    limaRatus,
  } = nilai;
  const jumlah =
    seratusRibu * 100000 +
    limapuluhRibu * 50000 +
    duapuluhRibu * 20000 +
    sepuluhRibu * 10000 +
    limaRibu * 5000 +
    duaRibu * 2000 +
    seribu * 1000 +
    limaRatus * 500;

  // Fungsi untuk mengganti state showRincian dengan nilai sebaliknya, ini digunakan pada tombol detail
  const _handleClickRincian = () => setShowRincian(!showRincian);

  // Komponen untuk menampilkan baris dari table dengan data yang diberikan
  const DetailPecahan = ({ pecahan, jumlah }) => (
    <tr>
      <td>{pecahan}</td>
      <td>{jumlah}</td>
    </tr>
  );

  // Komponen untuk tampilan rincian yang akan diperlihatkan
  const Rincian = () => (
    <table>
      <thead>
        <tr>
          <th>Pecahan</th>
          <th>Jumlah</th>
        </tr>
      </thead>
      <tbody>
        <DetailPecahan pecahan={'100.000'} jumlah={seratusRibu} />
        <DetailPecahan pecahan={'50.000'} jumlah={limapuluhRibu} />
        <DetailPecahan pecahan={'20.000'} jumlah={duapuluhRibu} />
        <DetailPecahan pecahan={'10.000'} jumlah={sepuluhRibu} />
        <DetailPecahan pecahan={'5.000'} jumlah={limaRibu} />
        <DetailPecahan pecahan={'2.000'} jumlah={duaRibu} />
        <DetailPecahan pecahan={'1.000'} jumlah={seribu} />
        <DetailPecahan pecahan={'500'} jumlah={limaRatus} />
      </tbody>
    </table>
  );

  // Output dari komponen <Hitungan> ini sendiri
  const output = (
    <div className='container-hitungan'>
      <div className='hitungan'>
        <div>
          <p>{tanggal}</p>
          <h2>Rp. {jumlah}</h2>
        </div>
        <div className='detail'>
          <button onClick={_handleClickRincian}>Rincian</button>
        </div>
        <button
          className='btn-hapus'
          onClick={() => dispatch(hapusHitungan(index))}
        >
          X
        </button>
      </div>
      {showRincian && <Rincian />}
    </div>
  );
  return output;
};

const Daftar = () => {
  // Mengambil state hitungan dari store
  const daftarHitungan = useSelector((state) => state.hitungan);

  return (
    <div className='container'>
      <div className='container-title'>Daftar Hitungan</div>
      <div className='container-daftar'>
        <div className='daftar-hitung'>
          {daftarHitungan.map((hitungan, index) => (
            <Hitungan nilai={hitungan} key={index} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Daftar;
