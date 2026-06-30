// ===== MENÚ HAMBURGUESA =====
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Cerrar menú al hacer clic en un enlace
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // ===== CARGAR DATOS DESDE JSON =====
    fetch('data.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al cargar data.json');
            }
            return response.json();
        })
        .then(data => {
            renderServicios(data.servicios);
            renderContacto(data.contacto);
        })
        .catch(error => {
            console.error('Error:', error);
            // Fallback en caso de que no se cargue el JSON
            renderServiciosFallback();
            renderContactoFallback();
        });

    // ===== RENDERIZAR SERVICIOS =====
    function renderServicios(servicios) {
        const grid = document.getElementById('services-grid');
        if (!grid) return;

        grid.innerHTML = servicios.map(serv => `
            <div class="service-card">
                <i class="fas ${serv.icono}"></i>
                <h3>${serv.titulo}</h3>
                <p>${serv.descripcion}</p>
            </div>
        `).join('');
    }

    // ===== RENDERIZAR CONTACTO =====
    function renderContacto(contacto) {
        const grid = document.getElementById('contact-grid');
        if (!grid) return;

        const telefonosHtml = contacto.telefonos.map(tel => `
            <p><a href="tel:${tel.numero.replace(/\s/g, '')}">${tel.numero}</a></p>
        `).join('');

        grid.innerHTML = `
            <div class="contact-info">
                <h3>Estamos para ayudarte</h3>
                <p>Para cotizaciones o consultas técnicas, escríbenos o llámanos. Nuestro equipo responderá a la brevedad.</p>
                <ul class="contact-list">
                    <li>
                        <span class="icon"><i class="fas fa-map-marker-alt"></i></span>
                        <div>
                            <strong>Oficina Central</strong>
                            <p>${contacto.direccion}</p>
                        </div>
                    </li>
                    <li>
                        <span class="icon"><i class="fas fa-envelope"></i></span>
                        <div>
                            <strong>Email</strong>
                            <p><a href="mailto:${contacto.email}">${contacto.email}</a></p>
                        </div>
                    </li>
                    <li>
                        <span class="icon"><i class="fas fa-phone"></i></span>
                        <div>
                            <strong>Teléfonos</strong>
                            ${telefonosHtml}
                        </div>
                    </li>
                </ul>
            </div>
            <div class="contact-form">
                <form netlify>
                    <input type="text" name="name" placeholder="Tu Nombre" required>
                    <input type="email" name="email" placeholder="Tu Email" required>
                    <input type="text" name="subject" placeholder="Asunto">
                    <textarea name="message" placeholder="Tu Mensaje" rows="5" required></textarea>
                    <button type="submit" class="btn-primary">Enviar Mensaje</button>
                </form>
            </div>
        `;
    }

    // ===== FALLBACKS (si no carga el JSON) =====
    function renderServiciosFallback() {
        const grid = document.getElementById('services-grid');
        if (!grid) return;
        grid.innerHTML = `
            <div class="service-card"><i class="fas fa-fire"></i><h3>Calderas</h3><p>Diseño, fabricación, instalación y reparación.</p></div>
            <div class="service-card"><i class="fas fa-cogs"></i><h3>Montaje Mecánico</h3><p>Instalación profesional de equipos industriales.</p></div>
            <div class="service-card"><i class="fas fa-pipe"></i><h3>Piping</h3><p>Acero carbono, inoxidable y galvanizado.</p></div>
            <div class="service-card"><i class="fas fa-thermometer-half"></i><h3>Aislamiento Térmico</h3><p>Soluciones para optimizar el rendimiento energético.</p></div>
            <div class="service-card"><i class="fas fa-paint-roller"></i><h3>Pintura Industrial</h3><p>Granallado y pintura con acabados de alta calidad.</p></div>
            <div class="service-card"><i class="fas fa-gas-pump"></i><h3>Sistemas de Gas</h3><p>Instalación de sistemas de gas licuado y natural.</p></div>
        `;
    }

    function renderContactoFallback() {
        const grid = document.getElementById('contact-grid');
        if (!grid) return;
        grid.innerHTML = `
            <div class="contact-info">
                <h3>Estamos para ayudarte</h3>
                <p>Para cotizaciones o consultas técnicas, escríbenos o llámanos.</p>
                <ul class="contact-list">
                    <li><span class="icon"><i class="fas fa-map-marker-alt"></i></span><div><strong>Oficina Central</strong><p>Ruta D-43, Sector Las Barrancas, Coquimbo</p></div></li>
                    <li><span class="icon"><i class="fas fa-envelope"></i></span><div><strong>Email</strong><p><a href="mailto:contactosergas@gmail.com">contactosergas@gmail.com</a></p></div></li>
                    <li><span class="icon"><i class="fas fa-phone"></i></span><div><strong>Teléfonos</strong><p><a href="tel:+56973393666">+569 73393666</a></p><p><a href="tel:+56999991606">+569 99991606</a></p></div></li>
                </ul>
            </div>
            <div class="contact-form">
                <form netlify>
                    <input type="text" name="name" placeholder="Tu Nombre" required>
                    <input type="email" name="email" placeholder="Tu Email" required>
                    <input type="text" name="subject" placeholder="Asunto">
                    <textarea name="message" placeholder="Tu Mensaje" rows="5" required></textarea>
                    <button type="submit" class="btn-primary">Enviar Mensaje</button>
                </form>
            </div>
        `;
    }

    // ===== NAVEGACIÓN ACTIVA =====
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', function() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
});