import React, { useState, useEffect } from 'react';
import './style.css';

import { useSelector, useDispatch } from 'react-redux';

import { tambahHitungan } from '../../actions';

// Komponen untuk inputan jumlah pecahan yang ada
const InputUang = ({ nama, pecahan, value, aturNewHitungan }) => {
  // Fungsi untuk memanggil aturNewHitungan dan memberikan parameter event dari inputan
  const _handleNewHitungan = (e) => {
    aturNewHitungan(e);
  };

  return (
    <div className='input-uang'>
      <label>
        <strong>{pecahan}</strong>
      </label>
      <div>
        :{' '}
        <input
          type='number'
          name={nama}
          value={value === 0 ? '' : value}
          placeholder='jumlah lembaran'
          onChange={_handleNewHitungan}
        />
      </div>
    </div>
  );
};

const Form = () => {
  // Mengambil daftar hitungan yang ada dari reducer
  const daftarHitungan = useSelector((state) => state.hitungan);
  // Menggunakan hook untuk dispatch
  const dispatch = useDispatch();

  // Fungsi untuk mengambil hari, tanggal dan bulan hari ini
  function getHariIni() {
    const today = new Date();
    const dd = today.getDate();
    const mm = today.getMonth() + 1;
    const yyyy = today.getFullYear();
    return `${dd}-${mm}-${yyyy}`;
  }

  // Fungsi untuk menghitung jumlah dari pecahan" yang dimasukkan
  function hitungJumlah(clone) {
    const {
      seratusRibu,
      limapuluhRibu,
      duapuluhRibu,
      sepuluhRibu,
      limaRibu,
      duaRibu,
      seribu,
      limaRatus,
    } = clone;
    const jumlah =
      seratusRibu * 100000 +
      limapuluhRibu * 50000 +
      duapuluhRibu * 20000 +
      sepuluhRibu * 10000 +
      limaRibu * 5000 +
      duaRibu * 2000 +
      seribu * 1000 +
      limaRatus * 500;
    return jumlah;
  }

  const hitunganAwal = {
    tanggal: getHariIni(),
    seratusRibu: 0,
    limapuluhRibu: 0,
    duapuluhRibu: 0,
    sepuluhRibu: 0,
    limaRibu: 0,
    duaRibu: 0,
    seribu: 0,
    limaRatus: 0,
    jumlah: 0,
  };

  const [newHitungan, setNewHitungan] = useState(hitunganAwal);

  // Melihat daftar hitungan saat komponen pertama kali ditampilkan atau selesai dirender
  useEffect(() => {
    console.log(daftarHitungan);
    console.log(newHitungan);
  }, []);

  // Melihat object dari newHitungan saat ada perubahan pada object tersebut
  useEffect(() => {
    console.log(newHitungan);
  }, [newHitungan]);

  // Fungsi untuk handle new hitungan dengan menggambil nama dan value dari input dan memanggil fungsi hitung jumlah lalu mengganti jumlah pada object
  const aturNewHitungan = (e) => {
    const { name, value } = e.target;
    setNewHitungan((prevState) => {
      const clone = { ...prevState };
      clone[name] = +value;
      const jumlah = hitungJumlah(clone);
      clone.jumlah = jumlah;
      return {
        ...clone,
      };
    });
  };

  // Fungsi untuk menghandle saat form disubmit oleh pengguna, disini akan memanggil dispatch yang ada pada action dan menjalankan fungsi yang dipanggil pada reducer
  const _handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(tambahHitungan(newHitungan));
    alert('berhasil menambah');
    setNewHitungan(hitunganAwal);
  };
  const {
    seratusRibu,
    limapuluhRibu,
    duapuluhRibu,
    sepuluhRibu,
    limaRibu,
    duaRibu,
    seribu,
    limaRatus,
  } = newHitungan;
  return (
    <div>
      <div className='container'>
        <div className='container-title'>Masukkan Jumlah Uang</div>
        <form className='form-jumlah-uang' onSubmit={_handleOnSubmit}>
          <div className='daftar-jumlah-uang'>
            <div>
              <InputUang
                nama={'seratusRibu'}
                pecahan={'100.000'}
                value={seratusRibu}
                aturNewHitungan={aturNewHitungan}
              />
              <InputUang
                nama={'limapuluhRibu'}
                pecahan={'50.000'}
                value={limapuluhRibu}
                aturNewHitungan={aturNewHitungan}
              />
              <InputUang
                nama={'duapuluhRibu'}
                pecahan={'20.000'}
                value={duapuluhRibu}
                aturNewHitungan={aturNewHitungan}
              />
              <InputUang
                nama={'sepuluhRibu'}
                pecahan={'10.000'}
                value={sepuluhRibu}
                aturNewHitungan={aturNewHitungan}
              />
            </div>
            <div>
              <InputUang
                nama={'limaRibu'}
                pecahan={'5.000'}
                value={limaRibu}
                aturNewHitungan={aturNewHitungan}
              />
              <InputUang
                nama={'duaRibu'}
                pecahan={'2.000'}
                value={duaRibu}
                aturNewHitungan={aturNewHitungan}
              />
              <InputUang
                nama={'seribu'}
                pecahan={'1.000'}
                value={seribu}
                aturNewHitungan={aturNewHitungan}
              />
              <InputUang
                nama={'limaRatus'}
                pecahan={'500'}
                value={limaRatus}
                aturNewHitungan={aturNewHitungan}
              />
            </div>
          </div>
          <div className='jumlah-uang'>
            <h2>Rp. {newHitungan.jumlah}</h2>
          </div>
          <div className='button-submit'>
            <button>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
