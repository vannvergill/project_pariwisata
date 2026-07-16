// Database of Regencies
        const regencyData = {
            "bandar-lampung": {
                name: "Kota Bandar Lampung (Ibu Kota)",
                desc: "Pusat hiburan modern, wisata perbukitan, dan kuliner.",
                images: [
                    "https://images.unsplash.com/photo-1542317148-8b4bdccb33ea?q=80&w=1920",
                    "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=1920",
                    "https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?q=80&w=1920"
                ],
                items: [
                    { title: "Puncak Mas & Lengkung Langit", desc: "Destinasi perbukitan dengan spot foto instagramable dan pemandangan kota dari ketinggian.", icon: "fa-mountain" },
                    { title: "Taman Wisata Lembah Hijau", desc: "Taman rekreasi keluarga yang menggabungkan kebun binatang mini (taman satwa) dan waterboom.", icon: "fa-tree" },
                    { title: "Bukit Aslan", desc: "Wisata bukit modern dengan instalasi seni, jalur treking, dan pemandangan Teluk Lampung.", icon: "fa-hiking" }
                ]
            },
            "metro": {
                name: "Kota Metro",
                desc: "Kota pendidikan yang asri dengan wisata keluarga dan ruang terbuka hijau.",
                images: [
                    "https://images.unsplash.com/photo-1498084393753-b411b2d26b34?q=80&w=1920",
                    "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?q=80&w=1920",
                    "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=1920"
                ],
                items: [
                    { title: "Taman Merdeka Kota Metro", desc: "Alun-alun kota yang menjadi pusat kuliner malam dan santai keluarga.", icon: "fa-tree" },
                    { title: "Jembatan Gantung Pelita (Sumur Bandung)", desc: "Spot foto berlatar alam yang populer di pinggiran kota.", icon: "fa-camera" },
                    { title: "Damas Indah Waterpark", desc: "Destinasi rekreasi air untuk keluarga.", icon: "fa-swimming-pool" }
                ]
            },
            "lampung-selatan": {
                name: "Kabupaten Lampung Selatan",
                desc: "Pintu gerbang Pulau Sumatra yang kaya akan wisata pantai dan taman bermain besar.",
                images: [
                    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1920",
                    "https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=1920",
                    "https://images.unsplash.com/photo-1513258514937-2900224d08b3?q=80&w=1920"
                ],
                items: [
                    { title: "Krakatau Park", desc: "Taman hiburan tematik (theme park) terbesar di Sumatra yang terletak dekat Pelabuhan Bakauheni.", icon: "fa-ferris-wheel" },
                    { title: "Pantai Marina & Pantai Rio by The Beach", desc: "Pantai-pantai hits dengan pengelolaan modern, pasir putih, dan ombak yang indah.", icon: "fa-umbrella-beach" },
                    { title: "Menara Siger", desc: "Ikon Provinsi Lampung yang berdiri megah di atas bukit menghadap Selat Sunda.", icon: "fa-monument" }
                ]
            },
            "pesawaran": {
                name: "Kabupaten Pesawaran",
                desc: "Surga wisata bahari, pulau eksotis, dan snorkeling.",
                images: [
                    "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?q=80&w=1920",
                    "https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?q=80&w=1920",
                    "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?q=80&w=1920"
                ],
                items: [
                    { title: "Pulau Pahawang", desc: "Destinasi internasional yang terkenal dengan keindahan terumbu karang, ikan badut (nemo), dan aktivitas snorkeling.", icon: "fa-water" },
                    { title: "Pulau Tegal Mas", desc: "Resort pulau dengan gaya eksotis mirip Maladewa.", icon: "fa-umbrella-beach" },
                    { title: "Pantai Sari Ringgung & Mutun", desc: "Pantai ramah keluarga dengan fasilitas lengkap seperti dermaga pasir timbul.", icon: "fa-ship" }
                ]
            },
            "tanggamus": {
                name: "Kabupaten Tanggamus",
                desc: "Kombinasi wisata lumba-lumba liar dan lanskap alam yang dramatis.",
                images: [
                    "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1920",
                    "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?q=80&w=1920",
                    "https://images.unsplash.com/photo-1498855926480-d98e83099315?q=80&w=1920"
                ],
                items: [
                    { title: "Teluk Kiluan", desc: "Terkenal dengan atraksi lumba-lumba liar di laut lepas yang bisa dilihat langsung menggunakan perahu jukung.", icon: "fa-fish" },
                    { title: "Pantai Gigi Hiu", desc: "Pantai dengan gugusan karang tajam menjulang yang sangat eksotis, surga bagi para fotografer lanskap.", icon: "fa-camera" },
                    { title: "Air Terjun Way Lalaan", desc: "Wisata air terjun bersejarah yang sejuk di kaki Gunung Tanggamus.", icon: "fa-water" }
                ]
            },
            "pesisir-barat": {
                name: "Kabupaten Pesisir Barat",
                desc: "Kawasan selancar (surfing) kelas dunia dengan suasana santai.",
                images: [
                    "https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=1920",
                    "https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?q=80&w=1920",
                    "https://images.unsplash.com/photo-1488188840666-e2308741a62f?q=80&w=1920"
                ],
                items: [
                    { title: "Pantai Tanjung Setia", desc: "Pantai legendaris dengan ombak tinggi yang menjadi tuan rumah kejuaraan selancar internasional (WSL Krui Pro).", icon: "fa-water" },
                    { title: "Pulau Pisang", desc: "Pulau kecil yang tenang, terkenal dengan pantai pasir putih halus dan kerajinan kain Tapis lokal.", icon: "fa-umbrella-beach" },
                    { title: "Labuhan Jukung", desc: "Pantai pusat keramaian di ibu kota kabupaten (Krui) yang pas untuk menikmati matahari terbenam.", icon: "fa-sun" }
                ]
            },
            "lampung-barat": {
                name: "Kabupaten Lampung Barat",
                desc: "Wilayah pegunungan vulkanik yang kaya akan wisata alam dingin dan kopi.",
                images: [
                    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1920",
                    "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=1920",
                    "https://images.unsplash.com/photo-1498698907316-015822f676be?q=80&w=1920"
                ],
                items: [
                    { title: "Kebun Raya Liwa (KRL)", desc: "Taman botani di dataran tinggi dengan koleksi tanaman hias dan udara yang sejuk.", icon: "fa-leaf" },
                    { title: "Kawasan Wisata Suoh", desc: "Memiliki danau 3 warna dan bentang alam geothermal (panas bumi) seperti keramik alam dan pasir kuning.", icon: "fa-water" },
                    { title: "Temiangan Hill", desc: "Spot berkemah populer untuk menikmati pemandangan negeri di atas awan.", icon: "fa-campground" }
                ]
            },
            "lampung-timur": {
                name: "Kabupaten Lampung Timur",
                desc: "Pusat konservasi satwa dilindungi dan sejarah purbakala.",
                images: [
                    "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?q=80&w=1920",
                    "https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?q=80&w=1920",
                    "https://images.unsplash.com/photo-1505934333218-8fe26ff118fb?q=80&w=1920"
                ],
                items: [
                    { title: "Taman Nasional Way Kambas (TNWK)", desc: "Pusat latihan dan konservasi Gajah Sumatra, serta Badak Sumatra yang mendunia.", icon: "fa-elephant" },
                    { title: "Situs Purbakala Pugung Raharjo", desc: "Taman arkeologi yang menyimpan peninggalan zaman megalitikum, klasik (Hindu-Buddha), hingga Islam berupa punden berundak dan benteng tanah.", icon: "fa-monument" }
                ]
            },
            "lampung-tengah": {
                name: "Kabupaten Lampung Tengah",
                desc: "Wilayah pertanian dan transmigrasi yang memiliki wisata bendungan serta religi.",
                images: [
                    "https://images.unsplash.com/photo-1582215286419-54d19d67566f?q=80&w=1920",
                    "https://images.unsplash.com/photo-1563514757342-9958742875f1?q=80&w=1920",
                    "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=1920"
                ],
                items: [
                    { title: "Danau Tirta Gangga", desc: "Danau dengan pura di tengahnya yang kental dengan nuansa adat Bali di daerah Seputih Banyak.", icon: "fa-place-of-worship" },
                    { title: "Kawasan Wisata Danau Bekri", desc: "Danau buatan dengan jembatan gantung yang populer untuk tempat rekreasi warga lokal.", icon: "fa-water" }
                ]
            },
            "lampung-utara": {
                name: "Kabupaten Lampung Utara",
                desc: "Daerah pedalaman yang menyimpan banyak potensi air terjun tersembunyi.",
                images: [
                    "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?q=80&w=1920",
                    "https://images.unsplash.com/photo-1506159904225-b4618e47f96b?q=80&w=1920",
                    "https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=1920"
                ],
                items: [
                    { title: "Bendungan Way Rarem", desc: "Waduk besar yang difungsikan untuk irigasi sekaligus objek wisata perahu dan memancing.", icon: "fa-ship" },
                    { title: "Air Terjun Curup Selampung", desc: "Air terjun dengan suasana alam yang masih sangat asri dan alami.", icon: "fa-water" }
                ]
            },
            "way-kanan": {
                name: "Kabupaten Way Kanan",
                desc: "Dijuluki Bumi Petani dan terkenal dengan wisata petualangan sungai/air terjun.",
                images: [
                    "https://images.unsplash.com/photo-1506159904225-b4618e47f96b?q=80&w=1920",
                    "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?q=80&w=1920",
                    "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1920"
                ],
                items: [
                    { title: "Air Terjun Curup Gangsa", desc: "Air terjun megah dengan dinding batu melebar yang menyerupai tirai air raksasa.", icon: "fa-water" },
                    { title: "Wisata Arung Jeram Sungai Way Besai", desc: "Destinasi bagi pecinta adrenalin dan olahraga arus deras.", icon: "fa-swimmer" }
                ]
            },
            "mesuji": {
                name: "Kabupaten Mesuji",
                desc: "Kabupaten di perbatasan Sumatra Selatan yang didominasi wilayah perairan sungai besar.",
                images: [
                    "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1920",
                    "https://images.unsplash.com/photo-1506159904225-b4618e47f96b?q=80&w=1920",
                    "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?q=80&w=1920"
                ],
                items: [
                    { title: "Taman Kehati (Keanekaragaman Hayati)", desc: "Taman rekreasi keluarga buatan pemerintah daerah yang dilengkapi fasilitas waterboom, kebun binatang mini, dan danau buatan.", icon: "fa-tree" },
                    { title: "Wisata Sungai Mesuji", desc: "Menawarkan pengalaman menyusuri sungai besar dengan perahu tradisional.", icon: "fa-ship" }
                ]
            },
            "tulang-bawang": {
                name: "Kabupaten Tulang Bawang",
                desc: "Kaya akan sejarah kerajaan masa lalu dan wisata ikonik buatan.",
                images: [
                    "https://images.unsplash.com/photo-1548625361-ec8f1211e227?q=80&w=1920",
                    "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=1920",
                    "https://images.unsplash.com/photo-1505934333218-8fe26ff118fb?q=80&w=1920"
                ],
                items: [
                    { title: "Cakat Raya", desc: "Sering disebut miniaturnya Indonesia karena memiliki replika berbagai rumah adat (seperti Candi Prambanan kecil, rumah adat Jawa, Bali, dan Minang) di satu kawasan perbukitan.", icon: "fa-gopuram" },
                    { title: "Dermaga Tangga Raja", desc: "Situs sejarah tepi sungai yang dahulunya merupakan tempat pendaratan kapal para raja.", icon: "fa-ship" }
                ]
            },
            "tulang-bawang-barat": {
                name: "Kabupaten Tulang Bawang Barat",
                desc: "Sangat terkenal dengan arsitektur modernnya yang filosofis dan artistik.",
                images: [
                    "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=1920",
                    "https://images.unsplash.com/photo-1548625361-ec8f1211e227?q=80&w=1920",
                    "https://images.unsplash.com/photo-1505934333218-8fe26ff118fb?q=80&w=1920"
                ],
                items: [
                    { title: "Kompleks Dunia Tuba (Masjid Apung & Sesat Agung)", desc: "Masjid tanpa kubah (Masjid 99 Cahaya) dan Balai Adat yang memiliki desain arsitektur kontemporer sangat indah.", icon: "fa-mosque" },
                    { title: "Patung Relief Empat Marga", desc: "Patung wajah raksasa megah yang dipahat di tebing batu, menggambarkan tokoh adat empat marga asli daerah setempat.", icon: "fa-monument" },
                    { title: "Taman Kebaikan (Las Sengok)", desc: "Kawasan ruang terbuka hijau bernuansa magis dan asri.", icon: "fa-tree" }
                ]
            },
            "pringsewu": {
                name: "Kabupaten Pringsewu",
                desc: "Pusat agrowisata kreatif dan perbukitan di jalur lintas barat.",
                images: [
                    "https://images.unsplash.com/photo-1505934333218-8fe26ff118fb?q=80&w=1920",
                    "https://images.unsplash.com/photo-1548625361-ec8f1211e227?q=80&w=1920",
                    "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=1920"
                ],
                items: [
                    { title: "Talang Indah & Bukit Pangonan", desc: "Wisata perbukitan yang memanfaatkan situs cagar budaya jembatan talang air peninggalan kolonial Belanda menjadi spot foto kreatif.", icon: "fa-camera" },
                    { title: "Lembah Akasia & Rest Area Pringsewu", desc: "Tempat persinggahan populer dengan pemandangan sawah berundak yang hijau di pinggir jalan lintas.", icon: "fa-coffee" }
                ]
            }
        };

        // JS Logic
        const regencyCoords = {
            "bandar-lampung": [-5.4294, 105.2638],
            "metro": [-5.1135, 105.3068],
            "lampung-selatan": [-5.7333, 105.5833],
            "pesawaran": [-5.4222, 105.1764],
            "tanggamus": [-5.5000, 104.6667],
            "pesisir-barat": [-5.1953, 103.9333],
            "lampung-barat": [-5.0333, 104.0500],
            "lampung-timur": [-5.1000, 105.6833],
            "lampung-tengah": [-4.9500, 105.2167],
            "lampung-utara": [-4.8167, 104.8833],
            "way-kanan": [-4.4500, 104.5333],
            "mesuji": [-3.9833, 105.3833],
            "tulang-bawang": [-4.3833, 105.7833],
            "tulang-bawang-barat": [-4.4333, 105.0667],
            "pringsewu": [-5.3500, 104.9833]
        };

        async function fetchWeather(lat, lng, containerId) {
            try {
                const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current_weather=true`);
                const data = await response.json();
                
                if (data && data.current_weather) {
                    const temp = Math.round(data.current_weather.temperature);
                    const code = data.current_weather.weathercode;
                    
                    let icon = 'fa-sun';
                    let desc = 'Cerah';
                    
                    if (code >= 1 && code <= 3) { icon = 'fa-cloud-sun'; desc = 'Cerah Berawan'; }
                    else if (code >= 45 && code <= 48) { icon = 'fa-smog'; desc = 'Berkabut'; }
                    else if (code >= 51 && code <= 67) { icon = 'fa-cloud-rain'; desc = 'Hujan Ringan'; }
                    else if (code >= 71 && code <= 77) { icon = 'fa-snowflake'; desc = 'Salju'; }
                    else if (code >= 80 && code <= 82) { icon = 'fa-cloud-showers-heavy'; desc = 'Hujan Lebat'; }
                    else if (code >= 95) { icon = 'fa-bolt'; desc = 'Badai Petir'; }

                    const widget = document.getElementById(containerId);
                    if (widget) {
                        widget.innerHTML = `
                            <div style="display:inline-flex; align-items:center; gap:10px; background:rgba(230, 126, 34, 0.1); padding:8px 16px; border-radius:20px; color:var(--secondary); font-weight:600; margin-bottom:1.5rem; border: 1px solid rgba(230, 126, 34, 0.2);">
                                <i class="fas ${icon}"></i> 
                                <span>${temp}°C - ${desc}</span>
                                <span style="font-size:0.75rem; color:var(--text-muted); margin-left:8px; font-weight:normal;">Real-time</span>
                            </div>
                        `;
                    }
                }
            } catch (e) {
                console.log("Failed to fetch weather", e);
            }
        }

        function getQueryParam(param) {
            const urlParams = new URLSearchParams(window.location.search);
            return urlParams.get(param);
        }

        function renderGallery(images) {
            if (!images || images.length === 0) return '';
            let html = '<div class="interactive-gallery">';
            images.forEach((imgUrl, idx) => {
                html += `
                    <div class="gallery-item" onclick="openLightbox('${imgUrl}')">
                        <img src="${imgUrl}" alt="Gallery Image ${idx + 1}" loading="${idx === 0 ? 'eager' : 'lazy'}">
                        <div class="gallery-overlay"><i class="fas fa-expand-arrows-alt"></i></div>
                    </div>
                `;
            });
            html += '</div>';
            return html;
        }

        function openLightbox(url) {
            let lightbox = document.getElementById('lightbox');
            if (!lightbox) {
                lightbox = document.createElement('div');
                lightbox.id = 'lightbox';
                lightbox.className = 'lightbox';
                lightbox.innerHTML = `
                    <div class="lightbox-close" onclick="closeLightbox()"><i class="fas fa-times"></i></div>
                    <img id="lightbox-img" src="" alt="Expanded Image">
                `;
                document.body.appendChild(lightbox);
                
                // Close on click outside
                lightbox.addEventListener('click', (e) => {
                    if (e.target === lightbox) closeLightbox();
                });
            }
            document.getElementById('lightbox-img').src = url;
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeLightbox() {
            const lightbox = document.getElementById('lightbox');
            if (lightbox) {
                lightbox.classList.remove('active');
                document.body.style.overflow = '';
            }
        }

        // Initialize
        document.addEventListener('DOMContentLoaded', () => {
            const id = getQueryParam('id') || 'bandar-lampung'; // Fallback to bandar-lampung
            const data = regencyData[id];

            if (data) {
                // Set Header
                document.getElementById('regency-name').textContent = data.name;
                document.getElementById('regency-desc').textContent = data.desc;
                document.title = data.name + " - Visit Lampung";

                // Generate Content
                const dynamicContent = document.getElementById('dynamic-content');
                let html = '<div id="weather-widget"></div>';
                
                if (data.images) {
                    html += renderGallery(data.images);
                }

                html += '<h2>Destinasi Unggulan</h2>';
                
                data.items.forEach(item => {
                    html += `
                        <div class="item-card">
                            <h3 class="item-title"><i class="fas ${item.icon}"></i> ${item.title}</h3>
                            <p class="item-desc">${item.desc}</p>
                        </div>
                    `;
                });

                // Culinary Section
                html += `
                    <h2 style="margin-top: 4rem;">Kuliner Khas</h2>
                    <div class="item-card" style="border-left-color: #e67e22;">
                        <h3 class="item-title" style="color: #e67e22;"><i class="fas fa-utensils"></i> Pusat Kuliner Lokal</h3>
                        <p class="item-desc">Nikmati berbagai hidangan khas dan temukan rekomendasi UMKM kuliner terbaik di ${data.name}.</p>
                        <a href="index.html#map-section" class="btn" style="margin-top: 1rem; font-size: 0.8rem; padding: 0.6rem 1.5rem;">Lihat Peta Kuliner</a>
                    </div>
                `;

                dynamicContent.innerHTML = html;

                // Fetch real-time weather
                const coords = regencyCoords[id] || regencyCoords["bandar-lampung"];
                fetchWeather(coords[0], coords[1], 'weather-widget');
            } else {
                document.getElementById('regency-name').textContent = "Regency Not Found";
                document.getElementById('regency-desc').textContent = "Please select a valid destination.";
                document.getElementById('content-container').innerHTML = '<p>The location could not be found. <a href="index.html#regencies">Go back</a></p>';
            }
        });