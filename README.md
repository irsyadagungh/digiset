# Digiset

Digiset adalah sebuah platform berbasis web yang dirancang untuk memanfaatkan teknologi blockchain dalam mendigitalisasi dan mengelola aset. Aplikasi ini menawarkan solusi modern yang memastikan keamanan, transparansi, dan akurasi dalam pengelolaan aset digital.

## Ringkasan

Digiset memungkinkan pengguna untuk mendokumentasikan aset mereka secara digital dengan memanfaatkan teknologi blockchain. Dengan aplikasi ini, setiap aset yang didigitalisasi memiliki tanda unik yang tidak dapat diubah untuk menghindari risiko pemalsuan dan memastikan validasi keaslian aset. 

Fitur-fitur utama Digiset mencakup:

1. **Login dan Registrasi**
   - Pengguna baru dapat melakukan registrasi untuk mengakses layanan.
   - Pengguna terdaftar dapat login untuk mengelola aset mereka.

2. **Homepage untuk Kategori Aset**
   - Halaman utama menampilkan daftar kategori aset yang tersedia.
   - Pengguna dapat memilih jenis aset untuk melihat atau menambahkan aset baru.

3. **Manajemen Detail Aset**
   - **Wallet Pemilik Sebelumnya**: Menampilkan riwayat wallet para pemilik aset sebelumnya.
   - **Bukti Kepemilikan**: Memberikan dokumen digital sebagai bukti sah kepemilikan aset.
   - **Bukti Transaksi**:
     - Opsional untuk pengguna pertama (pemilik awal).
     - Wajib untuk pemilik kedua dan seterusnya guna mencatat perpindahan kepemilikan.

## Disclaimer

Mohon diperhatikan bahwa saat ini fitur integrasi blockchain pada aplikasi Digiset masih dalam tahap pengembangan. Karena itu, data yang terkait dengan aset belum dapat sepenuhnya masuk ke database blockchain. Pengguna tetap dapat mendigitalisasi aset mereka, tetapi pencatatan pada sistem blockchain akan dilakukan setelah perbaikan fitur ini selesai.

Kami berkomitmen untuk segera memperbaiki masalah ini dan mengimplementasikan fungsi blockchain secara penuh.

## Teknologi yang Digunakan
- **Frontend**: Next JS
- **Backend**: Azle
- **Database**: Firebase (Non-Blockchain), DFX (Blockchain)

---

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
