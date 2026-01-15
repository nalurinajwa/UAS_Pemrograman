const quizData = {
    id: {
        title: "BrainTease Quiz",
        description: "Tantang otakmu dengan quiz cerdas, lucu, dan sedikit 'receh' untuk mengisi waktu luangmu!",
        start: "Mulai Sekarang!",
        labels: {
            lang: "Pilih Bahasa",
            theme: "Tema Quiz",
            diff: "Kesulitan",
            count: "Jumlah Soal"
        },
        themes: {
            receh: "Tebak-tebakan Receh",
            logic: "Logika Unik",
            knowledge: "Pengetahuan Umum"
        },
        difficulties: {
            easy: "Mudah (Santuy)",
            medium: "Sedang (Cerdas)",
            hard: "Sulit (Pro)"
        },
        results: {
            great: "Luar biasa! Kamu jenius atau memang receh?",
            good: "Lumayan lah, tingkat kelucuanmu di atas rata-rata.",
            bad: "Waduh, kayanya kamu perlu nonton Srimulat lagi.",
            retry: "Main Lagi",
            home: "Beranda"
        },
        questions: {
            receh: [
                // EASY (SANTUY) - Total target ~20
                { q: "Ayam apa yang paling besar?", options: ["Ayam Semesta", "Ayam Gajah", "Ayam Raksasa", "Ayam Kordinat"], correct: 0, diff: "easy", img: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=800&q=80" },
                { q: "Apa bedanya modem sama kamu?", options: ["Modem konek ke internet, kamu konek ke hati", "Modem mahal, kamu murah", "Ga ada bedanya", "Modem kotak, kamu bulat"], correct: 0, diff: "easy" },
                { q: "Sayur, sayur apa yang bisa nyanyi?", options: ["Kol-play", "Sawi-ra", "Bayam-ngkan", "Tomat-o"], correct: 0, diff: "easy", img: "https://images.unsplash.com/photo-1597362860722-394023991bb7?auto=format&fit=crop&w=800&q=80" },
                { q: "Kenapa air laut asin?", options: ["Karena ikannya keringetan", "Karena garam dapur tumpah", "Takdir Tuhan", "Karena ikannya nangis"], correct: 0, diff: "easy" },
                { q: "Gajah apa yang paling baik?", options: ["Gajah-at", "Gajah-ah", "Ga-jahil", "Gajah-tuh"], correct: 2, diff: "easy" },
                { q: "Bis apa yang biasanya ada di pohon?", options: ["Bis-ikan angin", "Bis-ul", "Bis-tar", "Bis-nis"], correct: 0, diff: "easy" },
                { q: "Kenapa Superman bajunya ada huruf 'S'?", options: ["Karena kalau 'M' jadi Superman", "Karena 'S' itu Super", "Karena kalau 'XL' kegedean", "Simbol harapan"], correct: 2, diff: "easy" },
                { q: "Ikan apa yang berhenti?", options: ["Ikan pause", "Ikan stop", "Ikan macet", "Ikan parkir"], correct: 0, diff: "easy" },
                { q: "Lele, lele apa yang di tepi jalan?", options: ["Lele-pon umum", "Lele-lawar", "Lele-lah", "Lele-bihan"], correct: 0, diff: "easy" },
                { q: "Kadal, kadal apa yang bikin sakit hati?", options: ["Kadal-uan", "Kadal-angan", "Kadal-in aku", "Kadal-as"], correct: 2, diff: "easy" },
                { q: "Kupu-kupu apa yang bikin orang jadi kaget?", options: ["Kupu-kupu malam", "Kupu-kupu liar", "Kupu-kupu-kul meja", "Kupu-kupu terbang"], correct: 2, diff: "easy" },
                { q: "Kenapa air di galon gak pernah habis?", options: ["Karena airnya banyak", "Karena kalau habis namanya jadi galau", "Karena ditutup rapat", "Karena gratis"], correct: 1, diff: "easy" },
                { q: "Sapi, sapi apa yang jalannya cepet?", options: ["Sapi-r", "Sapi balap", "Sapi kilat", "Sapi-da motor"], correct: 3, diff: "easy" },
                { q: "Kue, kue apa yang tengahnya gak ada rasanya?", options: ["Kue donat (tengahnya bolong)", "Kue pancong", "Kue bolu", "Kue kering"], correct: 0, diff: "easy" },
                { q: "Kenapa di komputer ada tombol 'Enter'?", options: ["Karena kalau 'Entar' gak jalan-jalan", "Biar keren", "Udah dari sananya", "Biar bisa ngetik"], correct: 0, diff: "easy" },

                // MEDIUM (CERDAS) - Total target ~20
                { q: "Ikan, ikan apa yang suka dandan?", options: ["Ikan Mas-cara", "Ikan Molek", "Ikan Bedak", "Ikan Lipstik"], correct: 0, diff: "medium" },
                { q: "Buah apa yang dimakan berbahaya?", options: ["Buah-aya darat", "Buah naga galak", "Buah duren tajam", "Buah sirsak"], correct: 0, diff: "medium" },
                { q: "Penyanyi luar negeri yang suka bersepeda?", options: ["Selena Gowes", "Justin Biker", "Taylor Swift Gear", "Ariana Grande Pedal"], correct: 0, diff: "medium" },
                { q: "Sabun, sabun apa yang paling genit?", options: ["Sabun-colek", "Sabun mandi", "Sabun cuci", "Sabun cair"], correct: 0, diff: "medium" },
                { q: "Sate apa yang berasal dari luar angkasa?", options: ["Sate-lit", "Sate Maranggi", "Sate Padang", "Sate Ayam"], correct: 0, diff: "medium" },
                { q: "Kota apa yang banyak bapak-bapaknya?", options: ["Purwo-daddy", "Semarang", "Bandung", "Jakarta"], correct: 0, diff: "medium" },
                { q: "Nama penyakit paling populer di China?", options: ["Kung-flu", "As-ma", "Ba-tuk", "Cacar"], correct: 0, diff: "medium" },
                { q: "Kenapa di rel kereta api ditaruh batu?", options: ["Biar nggak diambil orang kalau ditaruh duit", "Biar kereta nggak slip", "Biar rel kokoh", "Tradisi"], correct: 0, diff: "medium" },
                { q: "Minyak, minyak apa yang bikin mabuk?", options: ["Minyak-shikan senyummu", "Minyak kayu putih", "Minyak goreng", "Minyak wangi"], correct: 0, diff: "medium" },
                { q: "Pohon, pohon apa yang paling gak punya perasaan?", options: ["Pohon bambu", "Pohon cemara", "Pohon pih", "Pohon kelapa"], correct: 2, diff: "medium" },
                { q: "Telor, telor apa yang sangar?", options: ["Telor asin", "Telor puyuh", "Telor dadar", "Telor-asin (tatoan)"], correct: 3, diff: "medium" },
                { q: "Kenapa matahari tenggelam?", options: ["Karena capek", "Karena gak bisa berenang", "Udah malam", "Takdir"], correct: 1, diff: "medium" },
                { q: "Awan, awan apa yang gak bisa hujan?", options: ["Awan-ti", "Awan mendung", "Awan putih", "Awan-angan"], correct: 3, diff: "medium" },
                { q: "Kopi, kopi apa yang sedih?", options: ["Kopi-lih dia daripada aku", "Kopi pahit", "Kopi luwak", "Kopi hitam"], correct: 0, diff: "medium" },
                { q: "Negara apa yang siap dikeramasin?", options: ["Polandia", "Shampoo-nia", "Belanda", "Indonesia"], correct: 0, diff: "medium" },

                // HARD (PRO) - Total target ~20
                { q: "Apa persamaannya uang dan rahasia?", options: ["Sama-sama susah dipegang", "Sama-sama bikin pusing", "Sama-sama di bank", "Sama-sama kertas"], correct: 0, diff: "hard" },
                { q: "Apa bedanya sarung dan kotak?", options: ["Sarung bisa kotak-kotak, kotak nggak bisa sarung-sarung", "Gak ada bedanya", "Sarung kain, kotak kardus", "Sarung ditarik, kotak didorong"], correct: 0, diff: "hard" },
                { q: "Ban apa yang bisa makan, joget, dan nyanyi?", options: ["Ban-ci", "Ban serep", "Ban motor", "Ban mobil"], correct: 0, diff: "hard" },
                { q: "Kenapa dokter bedah mulutnya ditutup masker?", options: ["Kalau matanya yang ditutup nggak bisa lihat", "Biar steril", "Biar nggak bau", "Aturan RS"], correct: 0, diff: "hard" },
                { q: "Tukang apa yang kalau dipanggil malah nengok ke atas?", options: ["Tukang gali sumur", "Tukang cat langit", "Tukang bangunan", "Tukang bakso"], correct: 0, diff: "hard" },
                { q: "Negara apa yang paling banyak berkeringat?", options: ["Swedia", "Indonesia", "Afrika", "Brasil"], correct: 0, diff: "hard" },
                { q: "Kenapa pohon kelapa di depan rumah harus ditebang?", options: [" Karena kalau dicabut berat", "Biar nggak roboh", "Mau buat janur", "Ganggu kabel"], correct: 0, diff: "hard" },
                { q: "Huruf apa yang paling kedinginan?", options: ["Huruf B (di tengah AC)", "Huruf S (Es)", "Huruf W (Winter)", "Huruf O (Dingin)"], correct: 0, diff: "hard" },
                { q: "Apa bedanya aksi sama demo?", options: ["Aksi rodanya dua, demo rodanya tiga", "Gak ada bedanya", "Aksi kerja, demo protes", "Aksi film, demo masak"], correct: 0, diff: "hard" },
                { q: "Kenapa matahari makin panas?", options: ["Karena kalau dia cool, jadi bulan", "Karena di angkasa", "Banyak polusi", "Sudah takdir"], correct: 0, diff: "hard" },
                { q: "Sup, sup apa yang lambat?", options: ["Sup-ir (kalau macet)", "Sup buah", "Sup ayam", "Sup-ir angkot"], correct: 0, diff: "hard" },
                { q: "Kenapa mayat dibungkus kain putih?", options: ["Biar gak kabur", "Karena kalau pakai kain batik mau kondangan", "Udah tradisi", "Biar suci"], correct: 1, diff: "hard" },
                { q: "Lampu, lampu apa yang kalau pecah gak bisa nyala?", options: ["Lampu mati", "Lampu pijar", "Lampu-ng (provinsi)", "Lampu pecah"], correct: 2, diff: "hard" },
                { q: "Kenapa zombie kalau nyerang bareng-bareng?", options: ["Biar menang", "Karena kalau sendiri namanya zomblo", "Lagi konvoi", "Suka keramaian"], correct: 1, diff: "hard" },
                { q: "Bedanya gitar sama cewek?", options: ["Gitar dipetik, cewek dilirik", "Gitar punya senar, cewek punya seni", "Gitar kalau gak dipetik gak bunyi, cewek gak dipetik bunyi terus", "Gak ada bedanya"], correct: 2, diff: "hard" }
            ],
            logic: [
                // EASY - 15 Questions
                { q: "Jika ada 3 buah apel dan kamu mengambil 2, berapa apel yang kamu miliki?", options: ["1", "2", "3", "0"], correct: 1, diff: "easy" },
                { q: "Ayah Mary punya 5 anak: Nana, Nene, Nini, Nono. Siapa nama anak kelima?", options: ["Nunu", "Mary", "Neny", "Nana"], correct: 1, diff: "easy" },
                { q: "Benda apa yang punya leher tapi tidak punya kepala?", options: ["Botol", "Kaos", "Jerapah", "Gitar"], correct: 0, diff: "easy" },
                { q: "Benda apa yang selalu datang tapi tidak pernah sampai?", options: ["Besok", "Tamu", "Paket", "Hujan"], correct: 0, diff: "easy" },
                { q: "Punya kota tapi gak punya rumah, punya gunung tapi gak punya pohon. Apakah itu?", options: ["Peta", "Lukisan", "Mimpi", "Google Maps"], correct: 0, diff: "easy" },
                { q: "Benda apa yang kalau dipotong malah jadi lebih tinggi?", options: ["Celana", "Pohon", "Kertas", "Tali"], correct: 0, diff: "easy" },
                { q: "Apa yang selalu naik tapi tidak pernah turun?", options: ["Umur", "Harga barang", "Tangga", "Balon Gas"], correct: 0, diff: "easy" },
                { q: "Apa yang punya banyak gigi tapi tidak bisa menggigit?", options: ["Sisir", "Gergaji", "Hiu", "Roda Gigi"], correct: 0, diff: "easy" },
                { q: "Apa yang bisa diisi tapi tidak punya ruang?", options: ["Baterai", "Gelas", "Ember", "Tas"], correct: 0, diff: "easy" },
                { q: "Apa yang punya kaki tapi tidak bisa berjalan?", options: ["Meja", "Ayam", "Kucing", "Robot"], correct: 0, diff: "easy" },
                { q: "Apa yang punya lubang banyak tapi bisa menampung air?", options: ["Spons", "Saringan", "Gayung", "Ember bocor"], correct: 0, diff: "easy" },
                { q: "Apa yang kalau lampunya mati dia malah kelihatan?", options: ["Kunang-kunang", "Hantu", "Bintang", "Mata"], correct: 0, diff: "easy" },
                { q: "Apa yang lebih besar dari gajah tapi beratnya 0 gram?", options: ["Bayangan gajah", "Awan", "Balon", "Angin"], correct: 0, diff: "easy" },
                { q: "Apa yang kalau ditarik malah jadi pendek?", options: ["Rokok", "Karet", "Tali", "Ingus"], correct: 0, diff: "easy" },
                { q: "Apa yang punya mulut tapi tidak bisa bicara?", options: ["Gua", "Botol", "Ikan", "Sungai"], correct: 0, diff: "easy" },

                // MEDIUM - 15 Questions
                { q: "Semakin banyak kamu mengambil, semakin banyak yang tertinggal. Apakah itu?", options: ["Langkah kaki", "Teman", "Uang", "Waktu"], correct: 0, diff: "medium" },
                { q: "Manakah yang lebih berat: 1kg kapas atau 1kg besi?", options: ["Besi", "Kapas", "Sama saja", "Tergantung tempat"], correct: 2, diff: "medium" },
                { q: "Jika kamu menyalip orang di posisi kedua saat balapan, sekarang kamu di posisi?", options: ["Pertama", "Kedua", "Ketiga", "Terakhir"], correct: 1, diff: "medium" },
                { q: "Bulan apa yang memiliki 28 hari?", options: ["Februari saja", "Semua bulan", "Tergantung tahun kabisat", "Tidak ada"], correct: 1, diff: "medium" },
                { q: "Apa yang bisa dipatahkan tanpa harus disentuh?", options: ["Rekor", "Kayu", "Hati", "Es"], correct: 0, diff: "medium" },
                { q: "Mana yang lebih duluan ada di dunia menurut teori penciptaan?", options: ["Ayam", "Telur", "Barengan", "Tidak tahu"], correct: 0, diff: "medium" },
                { q: "Jika butuh 10 menit untuk merebus 1 telur, berapa menit untuk merebus 3 telur bersamaan?", options: ["10 menit", "30 menit", "20 menit", "5 menit"], correct: 0, diff: "medium" },
                { q: "Ada berapa huruf dalam kata 'ALFABET'?", options: ["7 huruf", "26 huruf", "5 huruf", "8 huruf"], correct: 0, diff: "medium" },
                { q: "Jika ada 12 ikan dan setengahnya mati (tenggelam), berapa banyak ikan di kolam?", options: ["12", "6", "0", "18"], correct: 0, diff: "medium" },
                { q: "Apa yang bisa kamu tangkap tapi tidak bisa kamu lempar?", options: ["Flu/Dingin", "Bola", "Pencuri", "Kesempatan"], correct: 0, diff: "medium" },
                { q: "Seorang botak berjalan di bawah hujan tapi rambutnya tidak basah. Kenapa?", options: ["Karena dia botak", "Pakai payung", "Pakai jas hujan", "Teduh"], correct: 0, diff: "medium" },
                { q: "Lilin, Lampu minyak, Kayu bakar. Mana yang kamu nyalakan dulu dengan 1 korek api?", options: ["Korek api", "Lilin", "Lampu minyak", "Kayu bakar"], correct: 0, diff: "medium" },
                { q: "Apa yang bertambah basah saat ia mengeringkan sesuatu?", options: ["Handuk", "Air", "Spons", "Tisu"], correct: 0, diff: "medium" },
                { q: "Apa yang bisa dilihat di tengah-tengah kata 'CAHAYA'?", options: ["Huruf H", "Cahaya", "Kegelapan", "Mata"], correct: 0, diff: "medium" },
                { q: "Apa yang punya satu lubang saat masuk, tapi punya dua lubang saat keluar?", options: ["Celana", "Baju", "Gua", "Rumah"], correct: 0, diff: "medium" },

                // HARD - 15 Questions
                { q: "Apa yang bisa hancur tanpa pernah disentuh atau dijatuhkan?", options: ["Janji", "Kaca", "Hati", "Es"], correct: 0, diff: "hard" },
                { q: "Pembuatnya gak butuh, pembelinya gak pakai, pemakainya gak tahu. Apakah itu?", options: ["Peti mati", "Baju bayi", "Kado", "Warisan"], correct: 0, diff: "hard" },
                { q: "Milikmu tapi lebih sering digunakan oleh orang lain. Apakah itu?", options: ["Nama", "Uang", "Handphone", "Sepatu"], correct: 0, diff: "hard" },
                { q: "Apa yang memiliki satu mata tapi tidak bisa melihat?", options: ["Jarum", "Badai", "Kentang", "Lubang kunci"], correct: 0, diff: "hard" },
                { q: "Semakin banyak ia ada, semakin sedikit yang bisa kamu lihat. Apakah itu?", options: ["Kegelapan", "Kabut", "Cahaya", "Mata"], correct: 0, diff: "hard" },
                { q: "Kamu pilot pesawat dengan 50 orang. Di Jkt turun 10, di Bali naik 5. Siapa nama pilotnya?", options: ["Nama Anda sendiri", "Budi", "Kapten Sullen", "Tidak tahu"], correct: 0, diff: "hard" },
                { q: "Apa yang bisa kamu dengar tapi tidak bisa kamu lihat atau sentuh?", options: ["Suara", "Angin", "Hantu", "Pikiran"], correct: 0, diff: "hard" },
                { q: "Apa yang selalu berada di depanmu tapi tidak bisa kamu lihat?", options: ["Masa depan", "Hidung", "Udara", "Masalah"], correct: 0, diff: "hard" },
                { q: "Apa yang punya hati di kepalanya?", options: ["Kubis / Kol", "Orang pintar", "Burung", "Cacing"], correct: 0, diff: "hard" },
                { q: "Apa yang bisa naik dan turun tapi tidak pernah bergerak?", options: ["Tangga/Suhu", "Lift", "Mobil", "Eskalator"], correct: 0, diff: "hard" },
                { q: "Jika ada 2 orang tua dan 2 orang anak, minimal ada berapa orang di sana?", options: ["3 orang", "4 orang", "2 orang", "5 orang"], correct: 0, diff: "hard" },
                { q: "Apa yang hanya punya dua kata, tapi ribuan huruf di dalamnya?", options: ["Kantor pos", "Kamus", "Buku", "Perpustakaan"], correct: 0, diff: "hard" },
                { q: "Apa yang punya 4 kaki di pagi hari, 2 di siang, dan 3 di malam hari?", options: ["Manusia", "Sphinx", "Kucing", "Robot"], correct: 0, diff: "hard" },
                { q: "Apa yang kalau kamu sebut namanya, ia akan hancur?", options: ["Keheningan", "Kaca", "Rahasia", "Es"], correct: 0, diff: "hard" },
                { q: "Apa yang bisa pergi ke seluruh dunia tanpa meninggalkan sudutnya?", options: ["Perangko", "Internet", "Pikiran", "Burung"], correct: 0, diff: "hard" }
            ],
            knowledge: [
                // EASY - 15 Questions
                { q: "Ibukota negara Indonesia adalah?", options: ["Jakarta", "Bandung", "Surabaya", "Medan"], correct: 0, diff: "easy" },
                { q: "Siapa presiden pertama Republik Indonesia?", options: ["Ir. Soekarno", "Moh. Hatta", "Soeharto", "BJ Habibie"], correct: 0, diff: "easy" },
                { q: "Apa warna bendera negara Indonesia?", options: ["Merah Putih", "Putih Merah", "Merah Kuning", "Biru Putih"], correct: 0, diff: "easy" },
                { q: "Pulau manakah yang memiliki penduduk terbanyak di Indonesia?", options: ["Jawa", "Sumatera", "Kalimantan", "Sulawesi"], correct: 0, diff: "easy" },
                { q: "Apa nama mata uang resmi Indonesia?", options: ["Rupiah", "Ringgit", "Dollar", "Yen"], correct: 0, diff: "easy" },
                { q: "Hewan apa yang menjadi lambang negara Indonesia?", options: ["Garuda", "Harimau", "Gajah", "Komodo"], correct: 0, diff: "easy" },
                { q: "Negara manakah yang menjajah Indonesia selama 350 tahun?", options: ["Belanda", "Jepang", "Inggris", "Portugis"], correct: 0, diff: "easy" },
                { q: "Apa nama samudera yang terletak di sebelah barat Indonesia?", options: ["Hindia", "Pasifik", "Atlantik", "Arktik"], correct: 0, diff: "easy" },
                { q: "Benua tempat Indonesia berada adalah?", options: ["Asia", "Australia", "Eropa", "Afrika"], correct: 0, diff: "easy" },
                { q: "Lagu kebangsaan Indonesia adalah?", options: ["Indonesia Raya", "Bagimu Negeri", "Garuda Pancasila", "Halo-Halo Bandung"], correct: 0, diff: "easy" },
                { q: "Candi Borobudur terletak di provinsi?", options: ["Jawa Tengah", "Jawa Timur", "Jawa Barat", "DI Yogyakarta"], correct: 0, diff: "easy" },
                { q: "Apa dasar negara Republik Indonesia?", options: ["Pancasila", "UUD 1945", "Bhinneka Tunggal Ika", "Proklamasi"], correct: 0, diff: "easy" },
                { q: "Siapa wakil presiden pertama Indonesia?", options: ["Moh. Hatta", "Adam Malik", "Hamengkubuwono IX", "BJ Habibie"], correct: 0, diff: "easy" },
                { q: "Apa warna daun pada umumnya?", options: ["Hijau", "Merah", "Kuning", "Biru"], correct: 0, diff: "easy" },
                { q: "Planet yang kita tinggali bernama?", options: ["Bumi", "Mars", "Venus", "Jupiter"], correct: 0, diff: "easy" },

                // MEDIUM - 15 Questions
                { q: "Benua terbesar di dunia adalah?", options: ["Asia", "Afrika", "Amerika Utara", "Antartika"], correct: 0, diff: "medium" },
                { q: "Siapakah pencipta lagu Indonesia Raya?", options: ["W.R. Supratman", "Ismail Marzuki", "Ibu Sud", "Kusbini"], correct: 0, diff: "medium" },
                { q: "Gunung tertinggi di Indonesia adalah?", options: ["Puncak Jaya", "Kerinci", "Rinjani", "Semeru"], correct: 0, diff: "medium" },
                { q: "Apa nama sel darah yang berfungsi mengangkut oksigen?", options: ["Sel darah merah", "Sel darah putih", "Keping darah", "Plasma darah"], correct: 0, diff: "medium" },
                { q: "Logam manakah yang paling baik dalam menghantar panas?", options: ["Perak", "Tembaga", "Emas", "Besi"], correct: 0, diff: "medium" },
                { q: "Negara manakah yang memiliki jumlah penduduk terbanyak di dunia?", options: ["India", "China", "Amerika Serikat", "Indonesia"], correct: 0, diff: "medium" },
                { q: "Apa nama sungai terpanjang di dunia?", options: ["Nil", "Amazon", "Mekong", "Mississippi"], correct: 0, diff: "medium" },
                { q: "Zat hijau daun pada tumbuhan disebut?", options: ["Klorofil", "Stomata", "Xilem", "Floem"], correct: 0, diff: "medium" },
                { q: "Vitamin apakah yang banyak terkandung dalam sinar matahari pagi?", options: ["Vitamin D", "Vitamin A", "Vitamin B", "Vitamin C"], correct: 0, diff: "medium" },
                { q: "Siapa penemu lampu pijar?", options: ["Thomas Alva Edison", "Alexander Graham Bell", "Albert Einstein", "Isaac Newton"], correct: 0, diff: "medium" },
                { q: "Apa ibukota negara Jepang?", options: ["Tokyo", "Kyoto", "Osaka", "Hiroshima"], correct: 0, diff: "medium" },
                { q: "Berapa jumlah provinsi di Indonesia saat ini (2024)?", options: ["38", "34", "37", "33"], correct: 0, diff: "medium" },
                { q: "Peristiwa Rengasdengklok berkaitan erat dengan peristiwa?", options: ["Proklamasi", "Sumpah Pemuda", "Bandung Lautan Api", "G30S PKI"], correct: 0, diff: "medium" },
                { q: "Apa nama lapisan udara yang melindungi bumi dari radiasi?", options: ["Ozon", "Atmosfer", "Stratosfer", "Mesosfer"], correct: 0, diff: "medium" },
                { q: "Siapa penemu benua Amerika?", options: ["Christopher Columbus", "Vasco da Gama", "Marco Polo", "James Cook"], correct: 0, diff: "medium" },

                // HARD - 15 Questions
                { q: "Planet terdekat dari matahari adalah?", options: ["Merkurius", "Venus", "Bumi", "Mars"], correct: 0, diff: "hard" },
                { q: "Apa rumus kimia untuk garam dapur?", options: ["NaCl", "H2O", "CO2", "HCl"], correct: 0, diff: "hard" },
                { q: "Siapa fisikawan yang merumuskan teori relativitas?", options: ["Albert Einstein", "Isaac Newton", "Stephen Hawking", "Niels Bohr"], correct: 0, diff: "hard" },
                { q: "Tahun berapakah Terusan Suez pertama kali dibuka?", options: ["1869", "1914", "1850", "1905"], correct: 0, diff: "hard" },
                { q: "Siapakah pelukis mahakarya Mona Lisa?", options: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Michelangelo"], correct: 0, diff: "hard" },
                { q: "Negara manakah yang terkecil di dunia berdasarkan luas wilayah?", options: ["Vatikan", "Monako", "San Marino", "Nauru"], correct: 0, diff: "hard" },
                { q: "Berapa lama waktu yang dibutuhkan cahaya matahari untuk sampai ke bumi?", options: ["8 menit", "1 menit", "1 jam", "Seketika"], correct: 0, diff: "hard" },
                { q: "Siapakah penemu telepon?", options: ["Alexander Graham Bell", "Nikola Tesla", "Marconi", "Edison"], correct: 0, diff: "hard" },
                { q: "Apa nama partai politik yang dipimpin Hitler di Jerman?", options: ["Nazi", "Komunis", "Sosialis", "Fasis"], correct: 0, diff: "hard" },
                { q: "Benua manakah yang sama sekali tidak memiliki penduduk asli?", options: ["Antartika", "Australia", "Amerika", "Afrika"], correct: 0, diff: "hard" },
                { q: "Siapakah tokoh yang dijuluki Bapak Pendidikan Nasional Indonesia?", options: ["Ki Hajar Dewantara", "Kartini", "Dewi Sartika", "HOS Cokroaminoto"], correct: 0, diff: "hard" },
                { q: "Apa unsur kimia dengan nomor atom 1?", options: ["Hidrogen", "Helium", "Oksigen", "Karbon"], correct: 0, diff: "hard" },
                { q: "Berapa jumlah jantung yang dimiliki seekor gurita?", options: ["Tiga", "Satu", "Dua", "Empat"], correct: 0, diff: "hard" },
                { q: "Siapakah penulis novel populer Harry Potter?", options: ["JK Rowling", "Stephen King", "Tolkien", "Agatha Christie"], correct: 0, diff: "hard" },
                { q: "Apa nama perang besar antara Amerika Serikat dan Uni Soviet yang tidak melibatkan kontak senjata langsung?", options: ["Perang Dingin", "Perang Dunia II", "Perang Vietnam", "Perang Korea"], correct: 0, diff: "hard" }
            ]
        }
    },
    en: {
        title: "BrainTease Quiz",
        description: "Challenge your brain with smart, funny, and slightly 'cheesy' quizzes to fill your free time!",
        start: "Start Now!",
        labels: { lang: "Select Language", theme: "Quiz Theme", diff: "Difficulty", count: "Question Count" },
        themes: { receh: "Cheesy Riddles", logic: "Unique Logic", knowledge: "General Knowledge" },
        difficulties: { easy: "Easy (Chill)", medium: "Medium (Smart)", hard: "Hard (Pro)" },
        results: { great: "Amazing! Are you a genius or just funny?", good: "Not bad, your humor level is above average.", bad: "Oops, you might need to watch more Sitcoms.", retry: "Play Again", home: "Home" },
        questions: {
            receh: [
                { q: "What do you call a fake noodle?", options: ["An Impasta", "A Puns-ta", "Noodle-less", "Fake-ccine"], correct: 0, diff: "easy", img: "https://images.unsplash.com/photo-1612450800052-98b17489ef99?auto=format&fit=crop&w=800&q=80" },
                { q: "Why don't scientists trust atoms?", options: ["Because they make up everything!", "They are too small", "They are unstable", "They have no feelings"], correct: 0, diff: "easy" },
                { q: "What did the ocean say to the beach?", options: ["Nothing, it just waved", "I'm saltier than you", "Stop sand-ing me", "Help me!"], correct: 0, diff: "easy" },
                { q: "Why did the scarecrow win an award?", options: ["Because he was outstanding in his field", "Because he was scary", "He was smart", "He was tall"], correct: 0, diff: "medium" },
                { q: "What do you call a bear with no teeth?", options: ["A gummy bear", "A grizzly", "A polar bear", "A honey bear"], correct: 0, diff: "medium" },
                { q: "I'm afraid for the calendar. Its days are numbered.", options: ["Bad joke", "Good joke", "Okay", "Not a joke"], correct: 0, diff: "hard" }
            ],
            logic: [
                { q: "What has keys but can't open locks?", options: ["A Piano", "A Chest", "A Door", "A Map"], correct: 0, diff: "easy" }
            ],
            knowledge: []
        }
    },
    jp: {
        title: "ブレインティーズクイズ",
        description: "暇つぶしに、スマートで面白く、少し「ダジャレ」なクイズで脳を刺激しましょう！",
        start: "今すぐ開始！",
        labels: { lang: "言語を選択", theme: "テーマ", diff: "難易度", count: "問題数" },
        themes: { receh: "ダジャレなぞなぞ", logic: "ユニークな論理", knowledge: "一般常識" },
        difficulties: { easy: "初級 (リラックス)", medium: "中級 (スマート)", hard: "上級 (プロ)" },
        results: { great: "素晴らしい！あなたは天才ですか、それとも芸人ですか？", good: "悪くないです、あなたのユーモアレベルは平均以上です。", bad: "おっと、もっとお笑い番組を見る必要があるかもしれません。", retry: "もう一度プレイ", home: "ホーム" },
        questions: {
            receh: [
                { q: "パンはパンでも、食べられないパンは？", options: ["フライパン", "アンパン", "メロンパン", "食パン"], correct: 0, diff: "easy", img: "https://images.unsplash.com/photo-1612170153139-6f881ff0675c?auto=format&fit=crop&w=800&q=80" },
                { q: "「いか」は「いか」でも、冷たいいかは？", options: ["すいか", "いかめし", "いかフライ", "いかそうめん"], correct: 0, diff: "easy" }
            ],
            logic: [],
            knowledge: []
        }
    }
};
;

// --- State Management ---
let currentState = {
    lang: 'id',
    theme: 'receh',
    difficulty: 'easy',
    count: 10,
    currentQuestionIndex: 0,
    score: 0,
    correctCount: 0,
    questions: [],
    timerInterval: null,
    timeLeft: 30,
    isSoundOn: true,
    isMusicPlaying: false,
    bgMusicNode: null,
    isAnswering: false
};

// DOM Elements initialized after load
let screens = {};
let elements = {};
let audioCtx;

function initApp() {
    screens = {
        home: document.getElementById('homeScreen'),
        quiz: document.getElementById('quizScreen'),
        result: document.getElementById('resultScreen')
    };

    elements = {
        langSelect: document.getElementById('langSelect'),
        themeSelect: document.getElementById('themeSelect'),
        diffSelect: document.getElementById('difficultySelect'),
        countSelect: document.getElementById('countSelect'),
        startBtn: document.getElementById('startBtn'),
        qText: document.getElementById('qText'),
        qImage: document.getElementById('qImage'),
        options: document.getElementById('options'),
        qCount: document.getElementById('qCount'),
        totalQ: document.getElementById('totalQ'),
        score: document.getElementById('score'),
        timer: document.getElementById('timer'),
        progressBar: document.getElementById('progressBar'),
        scoreDisplay: document.getElementById('scoreDisplay'),
        resultMsg: document.getElementById('resultMsg'),
        correctAnswers: document.getElementById('correctAnswers'),
        summaryTotal: document.getElementById('summaryTotal'),
        restartBtn: document.getElementById('restartBtn'),
        homeBtn: document.getElementById('homeBtn'),
        title: document.getElementById('title'),
        description: document.getElementById('description'),
        soundToggle: document.getElementById('soundToggle'),
        soundIcon: document.getElementById('soundIcon')
    };

    audioCtx = new (window.AudioContext || window.webkitAudioContext)();

    // Event Listeners
    elements.startBtn.addEventListener('click', initQuiz);
    elements.langSelect.addEventListener('change', (e) => {
        currentState.lang = e.target.value;
        updateLocalization();
    });
    elements.themeSelect.addEventListener('change', updateAvailableCount);
    elements.diffSelect.addEventListener('change', updateAvailableCount);
    elements.restartBtn.addEventListener('click', initQuiz);
    elements.homeBtn.addEventListener('click', () => {
        playSound('click');
        showScreen('home');
    });
    elements.soundToggle.addEventListener('click', () => {
        currentState.isSoundOn = !currentState.isSoundOn;
        elements.soundIcon.textContent = currentState.isSoundOn ? '🔊' : '🔇';
        if (currentState.isSoundOn) {
            if (audioCtx.state === 'suspended') audioCtx.resume();
            if (!screens.quiz.classList.contains('hidden')) toggleBackgroundMusic(true);
        } else {
            toggleBackgroundMusic(false);
        }
    });

    updateLocalization();
}

function updateLocalization() {
    const data = quizData[currentState.lang];
    elements.title.textContent = data.title;
    elements.description.textContent = data.description;
    elements.startBtn.textContent = data.start;
    document.getElementById('labelLang').textContent = data.labels.lang;
    document.getElementById('labelTheme').textContent = data.labels.theme;
    document.getElementById('labelDifficulty').textContent = data.labels.diff;
    document.getElementById('labelCount').textContent = data.labels.count;

    updateAvailableCount();
}

function updateAvailableCount() {
    const lang = elements.langSelect.value;
    const theme = elements.themeSelect.value;
    const diff = elements.diffSelect.value;

    const allPool = quizData[lang].questions[theme] || quizData[lang].questions['receh'] || [];
    const pool = allPool.filter(q => q.diff === diff);
    const count = pool.length > 0 ? pool.length : allPool.length;

    const currentVal = elements.countSelect.value;
    elements.countSelect.innerHTML = '';

    const options = [5, 10, 15, 20, 25, 30, 40, 50];
    options.forEach(opt => {
        if (opt <= count) {
            const el = document.createElement('option');
            el.value = opt;
            el.textContent = `${opt} Soal`;
            if (opt == currentVal) el.selected = true;
            elements.countSelect.appendChild(el);
        }
    });

    // Add "Semua" option
    const totalEl = document.createElement('option');
    totalEl.value = count;
    totalEl.textContent = `Semua (${count} Soal)`;
    if (count == currentVal) totalEl.selected = true;
    elements.countSelect.appendChild(totalEl);
}

function playSound(type) {
    if (!currentState.isSoundOn) return;
    if (audioCtx.state === 'suspended') audioCtx.resume();

    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    const now = audioCtx.currentTime;

    if (type === 'click') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(600, now);
        osc.frequency.exponentialRampToValueAtTime(100, now + 0.1);
        gain.gain.setValueAtTime(0.1, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.1);
        osc.start(now);
        osc.stop(now + 0.1);
    } else if (type === 'correct') {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(400, now);
        osc.frequency.exponentialRampToValueAtTime(800, now + 0.2);
        gain.gain.setValueAtTime(0.1, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.2);
        osc.start(now);
        osc.stop(now + 0.2);
    } else if (type === 'wrong') {
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(200, now);
        osc.frequency.exponentialRampToValueAtTime(50, now + 0.3);
        gain.gain.setValueAtTime(0.1, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
        osc.start(now);
        osc.stop(now + 0.3);
    }
}

function toggleBackgroundMusic(start) {
    if (!currentState.isSoundOn || !start) {
        if (currentState.bgMusicNode) {
            currentState.bgMusicNode.stop();
            currentState.bgMusicNode = null;
        }
        return;
    }
    if (currentState.bgMusicNode) return;
    if (audioCtx.state === 'suspended') audioCtx.resume();

    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(120, audioCtx.currentTime);
    gain.gain.setValueAtTime(0, audioCtx.currentTime);
    gain.gain.linearRampToValueAtTime(0.015, audioCtx.currentTime + 1);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    currentState.bgMusicNode = osc;
}

function initQuiz() {
    playSound('click');
    if (audioCtx.state === 'suspended') audioCtx.resume();

    currentState.lang = elements.langSelect.value;
    currentState.theme = elements.themeSelect.value;
    currentState.difficulty = elements.diffSelect.value;
    currentState.count = parseInt(elements.countSelect.value);

    const allPool = quizData[currentState.lang].questions[currentState.theme] || quizData[currentState.lang].questions['receh'] || [];
    let pool = allPool.filter(q => q.diff === currentState.difficulty);

    // Fallback if no questions for that specific difficulty/theme combo
    if (pool.length === 0) pool = allPool;

    const maxQuestions = Math.min(pool.length, currentState.count);
    currentState.questions = [...pool].sort(() => 0.5 - Math.random()).slice(0, maxQuestions);

    currentState.currentQuestionIndex = 0;
    currentState.score = 0;
    currentState.correctCount = 0;

    elements.totalQ.textContent = currentState.questions.length;
    elements.summaryTotal.textContent = currentState.questions.length;

    showScreen('quiz');
    loadQuestion();
    toggleBackgroundMusic(true);
}

function loadQuestion() {
    currentState.isAnswering = false;
    const q = currentState.questions[currentState.currentQuestionIndex];
    elements.qCount.textContent = currentState.currentQuestionIndex + 1;
    elements.score.textContent = currentState.score;
    elements.qText.textContent = q.q;

    if (q.img) {
        elements.qImage.src = q.img;
        elements.qImage.classList.remove('hidden');
    } else {
        elements.qImage.classList.add('hidden');
    }

    elements.options.innerHTML = '';

    // Create options with original index tracking and shuffle them
    const shuffledOptions = q.options.map((opt, idx) => ({ text: opt, originalIndex: idx }))
        .sort(() => Math.random() - 0.5);

    shuffledOptions.forEach((optObj, idx) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn fade-in';
        btn.style.animationDelay = `${idx * 0.1}s`;
        btn.textContent = optObj.text;
        btn.dataset.originalIndex = optObj.originalIndex; // Store for highlighting
        btn.onclick = () => handleAnswer(optObj.originalIndex, btn);
        elements.options.appendChild(btn);
    });

    const progress = (currentState.currentQuestionIndex / currentState.questions.length) * 100;
    elements.progressBar.style.width = `${progress}%`;
    startTimer();
}

function handleAnswer(choiceIdx, clickedBtn) {
    if (currentState.isAnswering) return;
    currentState.isAnswering = true;
    clearInterval(currentState.timerInterval);

    const q = currentState.questions[currentState.currentQuestionIndex];
    const buttons = elements.options.querySelectorAll('.option-btn');

    // Find the button that is actually correct using our data attribute
    const correctBtn = Array.from(buttons).find(btn => parseInt(btn.dataset.originalIndex) === q.correct);

    if (choiceIdx === q.correct) {
        playSound('correct');
        if (clickedBtn) clickedBtn.classList.add('correct');
        currentState.score += 10 + Math.floor(currentState.timeLeft / 2);
        currentState.correctCount++;
    } else {
        playSound('wrong');
        if (clickedBtn) clickedBtn.classList.add('wrong');
        if (correctBtn) correctBtn.classList.add('correct'); // Highlight the right one
    }

    setTimeout(() => {
        currentState.currentQuestionIndex++;
        if (currentState.currentQuestionIndex < currentState.questions.length) {
            loadQuestion();
        } else {
            showResults();
        }
    }, 1500);
}

function startTimer() {
    clearInterval(currentState.timerInterval);
    currentState.timeLeft = currentState.difficulty === 'easy' ? 30 : currentState.difficulty === 'medium' ? 20 : 10;
    updateTimerUI();

    currentState.timerInterval = setInterval(() => {
        currentState.timeLeft--;
        updateTimerUI();
        if (currentState.timeLeft <= 0) {
            clearInterval(currentState.timerInterval);
            handleAnswer(-1);
        }
    }, 1000);
}

function updateTimerUI() {
    elements.timer.textContent = `00:${currentState.timeLeft.toString().padStart(2, '0')}`;
    elements.timer.style.color = currentState.timeLeft <= 5 ? 'var(--error)' : 'inherit';
    elements.timer.style.borderColor = currentState.timeLeft <= 5 ? 'var(--error)' : 'var(--glass-border)';
}

function showResults() {
    elements.progressBar.style.width = `100%`;
    showScreen('result');
    elements.scoreDisplay.textContent = currentState.score;
    const data = quizData[currentState.lang].results;
    if (currentState.correctCount === currentState.questions.length) {
        elements.resultMsg.textContent = data.great;
    } else if (currentState.correctCount > (currentState.questions.length / 2)) {
        elements.resultMsg.textContent = data.good;
    } else {
        elements.resultMsg.textContent = data.bad;
    }
    elements.correctAnswers.textContent = currentState.correctCount;
    elements.summaryTotal.textContent = currentState.questions.length;
    elements.restartBtn.textContent = data.retry;
    elements.homeBtn.textContent = data.home;
    toggleBackgroundMusic(false);
}

function showScreen(screenKey) {
    Object.keys(screens).forEach(key => screens[key].classList.add('hidden'));
    screens[screenKey].classList.remove('hidden');
}

window.addEventListener('DOMContentLoaded', initApp);
