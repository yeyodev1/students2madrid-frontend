<script setup lang="ts">
import TheHeader from './components/TheHeader.vue';
import TheHero from './components/TheHero.vue';
import FeatureCard from './components/FeatureCard.vue';
import ServiceRoadmap from './components/ServiceRoadmap.vue';
import TestimonialsSection from './components/TestimonialsSection.vue';
import FAQSection from './components/FAQSection.vue';
import InfoCards from './components/InfoCards.vue';
import ContactForm from './components/ContactForm.vue';
import TheFooter from './components/TheFooter.vue';

const roadmapSteps = [
  {
    number: '01',
    title: 'Asesoría Inicial',
    description: 'Analizamos tu situación académica y legal para trazar la mejor ruta hacia España.'
  },
  {
    number: '02',
    title: 'Gestión Documental',
    description: 'Te guiamos paso a paso en la recolección y legalización de todos tus documentos.'
  },
  {
    number: '03',
    title: 'Aplicación de Visas',
    description: 'Gestionamos tu solicitud de visado ante consulados y oficinas de extranjería con éxito.'
  },
  {
    number: '04',
    title: 'Llegada y TIE',
    description: 'Te apoyamos en tus primeros pasos en Madrid: empadronamiento y obtención de la tarjeta física.'
  }
];
</script>

<template>
  <div class="app-wrapper">
    <TheHeader />
    <main>
      <section id="inicio">
        <TheHero 
          title="Tu Puente Académico y Legal hacia España"
          subtitle="Expertos en gestión de visados de estudio y residencia para ciudadanos internacionales. Tu futuro en Europa empieza aquí."
        />
      </section>

      <div id="servicios">
        <FeatureCard 
          class="fade-in"
          title="Visados de Estudios"
          description="Nos encargamos de todo el proceso legal para que tu única preocupación sea estudiar. Desde la matrícula hasta la concesión del visado."
          image="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
          :bullets="[
            'Matrícula en centros autorizados',
            'Seguro médico especializado',
            'Acreditación de medios económicos',
            'Renovaciones y prórrogas'
          ]"
        />
      </div>

      <div id="proceso">
        <ServiceRoadmap 
          sectionTitle="Tu camino a España en 4 pasos"
          :steps="roadmapSteps"
        />
      </div>

      <FeatureCard 
        title="Residencia y Extranjería"
        description="Nuestros abogados expertos te asesoran en todo tipo de autorizaciones de residencia, arraigo y reagrupación familiar."
        image="https://images.unsplash.com/photo-1543783207-ec64e4d95325?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
        imageRight
        :bullets="[
          'Arraigo social, laboral y para formación',
          'Modificación a residencia y trabajo',
          'Reagrupación familiar',
          'Nacionalidad Española'
        ]"
      />
      <TestimonialsSection />

      <FAQSection />

      <div id="contacto">
        <ContactForm />
      </div>

      <InfoCards />
    </main>
    <TheFooter />
  </div>
</template>

<style lang="scss">
.app-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}
</style>
