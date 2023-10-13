<script>

import NavRef from "@/components/UI/NavRef.vue";
export default {
  components: {
    NavRef,
  },
  data() {
    return {
      cars: [
        {
          name: 'Кадилак',
          brand: {
            cadillac: true,
          },
          description: "Американский производитель автомобилей класса «люкс», принадлежащий General Motors. \n"
        },
        {
          name: 'Ауди',
          brand: {
            audi: true,
          },
          description: "Audi AG  — немецкая автомобилестроительная компания в составе концерна Volkswagen Group"
        },
        {
          name: 'Лексус',
          brand: {
            lexus: true,
          },
          description: "Марка премиальных автомобилей, производимых японской корпорацией Toyota Motor. \n"
        },
        {
          name: 'Тойота',
          brand: {
            toyota: true,
          },
          description: "Toyota – самая крупная автомобилестроительная корпорация Японии.\n"
        },
        {
          name: 'Мерседес-бенз',
          brand: {
            'mercedes-benz': true,
          },
          description: "Торговая марка и одноимённая компания - производитель легковых " +
              "автомобилей премиального класса, грузовых автомобилей, " +
              "автобусов и других транспортных средств, входящая в состав " +
              "немецкого концерна «Mercedes-Benz Group».\n"
        },
        {
          name: 'БМВ',
          brand: {
            bmw: true,
          },
          description: "Аббревиатура BMW расшифровывается как «Bayerische Motoren Werke GmbH», " +
              "что переводится как «Баварские Моторные Заводы». В этом имени скрывается отсылка к " +
              "родине компании — Баварии.\n"
        },
        {
          name: 'Субару',
          brand: {
            subaru: true,
          },
          description: "Японская компания, специализирующаяся на производстве легковых и грузовых томобилей\n"
        },
        {
          name: 'Лэнд-ровер',
          brand: {
            'land-rover': true,
          },
          description: "Land Rover - британский бренд преимущественно " +
              "полноприводных внедорожных автомобилей, принадлежащий " +
              "многонациональному автопроизводителю Jaguar Land Rover\n"
        },
        {
          name: 'Хонда',
          brand: {
            honda: true,
          },
          description: "Honda Motor Co., Ltd. — японская транснациональная корпорация, " +
              "основанная в 1948 году изобретателем и предпринимателем Соитиро Хондой и" +
              " финансистом Такэо Фудзисавой\n"
        },
        {
          name: 'Нисан',
          brand: {
            nissan: true,
          },
          description: "Honda Motor Co., Ltd. — японская транснациональная корпорация, основанная " +
              "в 1948 году изобретателем и предпринимателем Соитиро Хондой и финансистом Такэо Фудзисавой\n"
        },
        {
          name: 'Шевроле',
          brand: {
            chevrolet: true,
          },
          description: "Марка автомобилей, производимых и реализуемых одноимённым " +
              "экономически самостоятельным подразделением корпорации General Motors.\n"
        },
        {
          name: 'Инфинити',
          brand: {
            infinity: true,
          },
          description: "Инфинити – известный автомобильный бренд, принадлежащий японской корпорации Nissan Motor\n"
        },
        {
          name: 'Шкода',
          brand: {
            skoda: true,
          },
          description: "Шкода - крупнейший производитель автомобилей в Чешской Республике," +
              " со штаб-квартирой, расположенной в городе Млада-Болеслав.\n"
        },
        {
          name: 'Митсубиши',
          brand: {
            mitsubishi: true,
          },
          description: "Японская автомобилестроительная компания, входит в группу Mitsubishi - " +
              "являющейся самой большой производственной группой Японии. \n"
        },
        {
          name: 'Фолксваген',
          brand: {
            volkswagen: true,
          },
          description: "Volkswagen – известная немецкая автомобильная марка, начало которой положил сам Фердинанд Порше. " +
              "Название Фольксваген переводится с немецкого, как \"народный автомобиль\", " +
              "функциональный, практичный и доступный каждому. \n"
        },
        {
          name: 'Додж ',
          brand: {
            dodge: true,
          },
          description: "Dodge — марка автомобилей, производимых американской компанией Chrysler. " +
              "Под маркой Dodge выпускаются легковые автомобили, пикапы, внедорожники и коммерческие автомобили.\n"
        },{
          name: 'Волво',
          brand: {
            volvo: true,
          },
          description: "Volvo – шведская компания, с 1930-х годов выпускающая легковые автомобили.\n"
        },
        {
          name: 'Асура',
          brand: {
            acura: true,
          },
          description: "Обособленное подразделение японского автопроизводителя Honda, выпускающее автомобили премиум-класса\n"
        },
        {
          name: 'Опель',
          brand: {
            opel: true,
          },
          description: "Обособленное подразделение японского автопроизводителя Honda, выпускающее автомобили премиум-класса\n"
        },
        {
          name: 'Жили',
          brand: {
            geely: true,
          },
          description: "Китайская автомобилестроительная компания\n"
        },
      ]
    }
  }
}
</script>

<template>
  <div>
  <h1>Теория по маркам машин</h1>
  <ul class="brands">
    <li class="brand" v-for="car in cars">
      <h2>
        {{car.name}}
      </h2>
      <p>
        <img :class="car.brand" src="../images/cars2.png">
      </p>
      <p>
        {{car.description}}
      </p>
    </li>
  </ul>
    <router-link to="/carTest">
    <nav-ref class="central_btn"> К тесту</nav-ref>
    </router-link>
  </div>
</template>

<style>
.central_btn {
  margin: 15px;
  text-align: center;
}

.brands {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  column-gap: 10px;
  row-gap: 20px;
}

.brand {
  width: 400px;
  background: rgba(189, 250, 140, 0.5);
  padding:10px;
}

.brand h2 + p, .brand h2 {
  text-align: center;
}

.cadillac {
  object-position: 0 0;
  object-fit: none;
  width: 160px;
  height: 160px;
  text-align: center;
}

.audi {
  object-fit: none;
  object-position: -180px -50px;
  width: 160px;
  height: 60px;
}

.lexus {
  object-fit: none;
  object-position: -370px 0;
  width: 160px;
  height: 160px;
}

.toyota {
  object-fit: none;
  object-position: -530px 0;
  width: 110px;
  height: 160px;
}

.mercedes-benz {
  object-fit: none;
  object-position: -665px 0;
  width: 110px;
  height: 160px;
}

.bmw {
  object-fit: none;
  object-position: -820px 0;
  width: 120px;
  height: 160px;
}

.subaru {
  object-fit: none;
  object-position: -50px -170px;
  width: 100px;
  height: 70px;
}

.land-rover {
  object-fit: none;
  object-position: -190px -170px;
  width: 150px;
  height: 80px;
}

.honda {
  object-fit: none;
  object-position: -505px -170px;
  width: 150px;
  height: 70px;
}

.nissan {
  object-fit: none;
  object-position: -660px -180px;
  width: 150px;
  height: 105px;
}

.chevrolet {
  object-fit: none;
  object-position: -15px -300px;
  width: 150px;
  height: 105px;
}

.infinity {
  object-fit: none;
  object-position: -225px -290px;
  width: 80px;
  height: 50px;
}

.skoda {
  object-fit: none;
  object-position: -375px -260px;
  width: 110px;
  height: 110px;
}

.mitsubishi {
  object-fit: none;
  object-position: -520px -290px;
  width: 110px;
  height: 100px;
}

.volkswagen {
  object-fit: none;
  object-position: -680px -315px;
  width: 100px;
  height: 100px;
}

.dodge {
  object-fit: none;
  object-position: -40px -400px;
  width: 100px;
  height: 100px;
}

.volvo {
  object-fit: none;
  object-position: -230px -402px;
  width: 250px;
  height: 100px;
}

.acura {
  object-fit: none;
  object-position: -555px -440px;
  width: 50px;
  height: 50px;
}

.opel {
  object-fit: none;
  object-position: -665px -440px;
  width: 150px;
  height: 150px;
}

.geely {
  object-fit: none;
  object-position: -24px -572px;
  width: 140px;
  height: 150px;
}
</style>