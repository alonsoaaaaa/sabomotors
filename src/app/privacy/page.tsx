import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

function NoticeOfPrivacy() {
  return (
    <div className="max-w-4xl mx-auto p-5">
      <Link href={"/sell"}>
        <ArrowLeftIcon size={40} color="blue" />
      </Link>
      <h1 className="text-xl font-bold text-center mb-4">
        Aviso de Privacidad de Seminuevos Sabo Motors
      </h1>
      <p className="mb-2">
        <strong>Fecha de efectividad:</strong> 4 de mayo de 2024
      </p>
      <p className="mb-2">
        <strong>Seminuevos Sabo Motors</strong>
      </p>
      <p className="mb-4">
        Avenida del ferrocarril, Manzana 23 Lote 30, Santa Cruz Tlapacoya, 56577
        Ixtapaluca, Méx.
      </p>
      <h2 className="text-lg font-semibold mb-3">Introducción</h2>
      <p className="mb-4">
        En Seminuevos Sabo Motors, estamos comprometidos con la protección de la
        privacidad de nuestros clientes. Este Aviso de Privacidad detalla los
        tipos de información personal que recopilamos, cómo la utilizamos y las
        medidas que tomamos para asegurar que su información personal sea
        manejada de manera adecuada.
      </p>

      <h2 className="text-lg font-semibold mb-3">
        Información que Recopilamos
      </h2>
      <p className="mb-4">
        Cuando decide vender su automóvil a través de Seminuevos Sabo Motors,
        recopilamos los siguientes tipos de información personal: Su nombre y
        detalles de contacto (como su número de teléfono y dirección de correo
        electrónico), información sobre su vehículo (como marca, modelo, año y
        VIN), para aceptar su solicitud de venta de vehículo.
      </p>
      <h2 className="text-lg font-semibold mb-3">Uso de su Información</h2>
      <p className="mb-4">
        La información personal recopilada se utiliza únicamente con el
        propósito de facilitar la venta de su vehículo. Esto incluye verificar
        la propiedad del vehículo, comunicarse con usted sobre el estado de su
        transacción, y completar el papeleo necesario para la venta del
        vehículo.
      </p>
      <h2 className="text-lg font-semibold mb-3">Compartir su Información</h2>
      <p className="mb-4">
        Seminuevos Sabo Motors no comparte su información personal con terceros.
        Su información se utiliza estrictamente para fines internos y para
        facilitar la transacción que ha solicitado.
      </p>
      <h2 className="text-lg font-semibold mb-3">
        Seguridad de su Información
      </h2>
      <p className="mb-4">
        Tomamos la seguridad de su información personal muy en serio e
        implementamos una variedad de medidas de seguridad para mantener la
        seguridad de sus datos personales. Estas medidas incluyen gestión de
        seguridad física, medidas de seguridad electrónica y salvaguardias
        procedimentales.
      </p>
      <h2 className="text-lg font-semibold mb-3">Sus Derechos</h2>
      <p className="mb-4">
        Usted tiene derecho a acceder a la información personal que tenemos
        sobre usted y a solicitar que se corrija o actualice. Por favor,
        contáctenos en la dirección mencionada arriba si desea hacer tal
        solicitud.
      </p>
      <h2 className="text-lg font-semibold mb-3">
        Cambios en este Aviso de Privacidad
      </h2>
      <p className="mb-4">
        Podemos actualizar este Aviso de Privacidad de tiempo en tiempo.
        Cualquier cambio será publicado en nuestro sitio web y, cuando sea
        apropiado, notificado a usted por correo electrónico.
      </p>
      <h2 className="text-lg font-semibold mb-3">Contáctenos</h2>
      <p className="mb-4">
        Si tiene alguna pregunta sobre este Aviso de Privacidad o nuestras
        prácticas de privacidad, por favor contáctenos en: Seminuevos Sabo
        Motors, Avenida del ferrocarril, Manzana 23 Lote 30, Santa Cruz
        Tlapacoya, 56577 Ixtapaluca, Méx o al correo electrónico
        servicio@seminuevossabomotors.com
      </p>
    </div>
  );
}

export default NoticeOfPrivacy;
