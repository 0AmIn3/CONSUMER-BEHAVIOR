import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

// import '/styles.css';

// import required modules
import { Scrollbar } from "swiper/modules";

const App = () => {
  const [swiper, setSwiper] = useState(null);

  // const nexto = () => {
  //   swiper.slideNext();
  // };
  // useEffect(()=>{
  //   window.addEventListener('keydown', (event) => {
  //     console.log(event.keyCode);
  //     swiper.slideNext();
  //   })
  // },[])
  const handleKeyDown = (event) => {
    console.log(event.keyCode);
 
  };
  useEffect(() => {
    const handleGlobalKeyDown = (event) => {
      handleKeyDown(event);
      swiper.slideNext();
    };

    window.addEventListener('keydown', handleGlobalKeyDown);
   
    return () => {
      window.removeEventListener('keydown', handleGlobalKeyDown);
    };
  }, [swiper]); 
  return (
    <div className=" max-w-[1920px] mx-auto">
      <div className=" h-screen  mx-auto  max-h-[900px]">
        <Swiper
          scrollbar={{
            hide: true,
          }}
          modules={[Scrollbar]}
          className="  h-full w-full "
          onSwiper={(s) => {
            console.log("initialize swiper", s);
            setSwiper(s);
          }}
        >
          <SwiperSlide className="  flex flex-col items-center   justify-center">
            <div className="w-[90%] h-[90%] sli  border-[4px] border-[#00E8DA] rounded-2xl  flex flex-col items-center  justify-center">
              <p className=" text-center text-3xl">Тема :</p>
              <p className=" text-center text-3xl font-semibold">
                Связи с общественностью, <br /> спонсорство и корпоративная
                реклама
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex items-center  justify-center">
            <div className="w-[90%] h-[90%] sli  border-[4px] p-10 border-[#00E8DA] rounded-2xl  flex flex-col ">
              <h1 className="text-3xl text-[#32B7C7] font-extrabold">
                1. Роль связей с общественностью:
              </h1>
              <div className="flex gap-5 mt-10 ">
                <div className="w-1/2 rounded-2xl  overflow-hidden">
                  <img
                    src="https://upinc.ru/wp-content/uploads/2023/02/pr-svyazi-s-obshchestvennostyu-prostymi-slovami2-min-1.jpg"
                    className="w-full"
                    alt=""
                  />
                </div>

                <p className="text-xl w-1/2">
                  Связи с общественностью (PR) представляют собой стратегический
                  инструмент, играющий неотъемлемую роль в современном бизнесе.{" "}
                  <br />
                  <br />
                  Они нацелены не только на формирование положительного
                  восприятия бренда, но и на установление глубоких, долгосрочных
                  отношений с обществом. <br />
                  <br /> В этом контексте важными аспектами являются управление
                  репутацией компании, создание благоприятного образа и
                  взаимодействие с ключевыми стейкхолдерами.
                </p>
              </div>
              <p className="text-2xl mt-5">
                Пример: Реализация успешных кампаний по формированию позитивного
                восприятия компании среди клиентов, сотрудников и общества в
                целом.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex items-center  justify-center">
            <div className="w-[90%] h-[90%] sli  border-[4px] p-10 border-[#00E8DA] rounded-2xl  flex flex-col ">
              <h1 className="text-3xl text-[#32B7C7] font-extrabold">
                2. Работа по связям с общественностью:
              </h1>
              <div className="flex gap-5 mt-10 ">
                <p className="text-xl w-1/2">
                  Эффективная стратегия связей с общественностью включает в себя
                  не только проактивные действия, но и грамотное реагирование на
                  кризисные ситуации. <br />
                  <br /> Важно использовать разнообразные инструменты, такие как
                  пресс-релизы, организация медийных событий, интервью с
                  представителями компании, а также активное взаимодействие в
                  онлайн-пространстве.
                </p>
                <div className="w-1/2 rounded-2xl  overflow-hidden">
                  <img
                    src="https://маэо.рф/images/05-pr-direktor.jpg"
                    className="w-full"
                    alt=""
                  />
                </div>
              </div>
              <div className="flex gap-5 mt-10 overflow-hidden">
                <div className="w-1/2 rounded-2xl  overflow-hidden">
                  <img
                    src="https://static.tildacdn.com/tild3963-3237-4530-a232-386331336262/_.jpg"
                    className="w-full"
                    alt=""
                  />
                </div>
                <p className="text-2xl mt-5 w-1/2">
                  Пример: Эффективное управление обратной связью в социальных
                  сетях для решения проблем и ответов на запросы клиентов.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex items-center  justify-center">
            <div className="w-[90%] h-[90%] sli  border-[4px] p-10 border-[#00E8DA] rounded-2xl  flex flex-col ">
              <h1 className="text-3xl text-[#32B7C7] font-extrabold">
                3. Спонсорство и мероприятия:
              </h1>
              <div className="flex gap-5 mt-10 ">
                <div className="w-1/2 rounded-2xl  overflow-hidden">
                  <img
                    src="https://s-bc.ru/storage/images/media/6b/98/3f65936e9efd2c4609c5f4fb4ca2.jpg"
                    className="w-full"
                    alt=""
                  />
                </div>
                <p className="text-xl w-1/2 flex flex-col justify-between">
                  Спонсорство становится неотъемлемой частью стратегии
                  маркетинга компании. <br />
                  <br /> Вложения в мероприятия и поддержку культурных и
                  общественных инициатив способствуют не только укреплению
                  позиции бренда, но и создают эмоциональную связь с аудиторией.
                  <p>
                    Пример: Партнерство с крупным культурным фестивалем, что не
                    только способствует продвижению бренда, но и подчеркивает
                    его вовлеченность в культурные сферы.
                  </p>
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex items-center  justify-center">
            <div className="w-[90%] h-[90%] sli  border-[4px] p-10 border-[#00E8DA] rounded-2xl  flex flex-col ">
              <h1 className="text-3xl text-[#32B7C7] font-extrabold">
                4. Корпоративная реклама:
              </h1>
              <div className="flex gap-5 mt-10 ">
                <p className="text-xl w-1/2">
                  Корпоративная реклама – это ключевой элемент построения образа
                  компании. <br />
                  <br /> Здесь важна не только визуальная привлекательность, но
                  и подчеркивание ценностей, миссии и ответственности перед
                  обществом. <br />
                  <br /> Разнообразные каналы, такие как телевидение, интернет и
                  социальные сети, служат площадкой для развертывания
                  корпоративных кампаний.
                </p>
                <div className="w-1/2 rounded-2xl  overflow-hidden">
                  <img
                    src="https://cf2.ppt-online.org/files2/slide/1/1Ud9MYqj6kbhl3PTXRSmrzONnu8yKBGsvZQfDCe2t/slide-8.jpg"
                    className="w-full"
                    alt=""
                  />
                </div>
              </div>
              <div className="flex gap-5 mt-5 overflow-hidden">
                <p className="text-2xl mt-0 w-1/2">
                  Пример: Создание видеоролика, раскрывающего историю бренда,
                  его ценностей и социальной значимости.
                </p>
                <div className="w-1/2 rounded-2xl  overflow-hidden"></div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex items-center  justify-center">
            <div className="w-[90%] h-[90%] sli  border-[4px] p-10 border-[#00E8DA] rounded-2xl  flex flex-col ">
              <h1 className="text-3xl text-[#32B7C7] font-extrabold">
                5. Инструменты связей с общественностью:
              </h1>
              <div className="flex gap-5 mt-10 ">
                <p className="text-xl w-1/2 flex flex-col justify-between">
                  <p>
                    Инструментарий PR включает в себя различные методы
                    воздействия на общественность. <br />
                    <br /> Пресс-релизы, медийные события, интервью, блоггинг, а
                    также сотрудничество с инфлюэнсерами и экспертами в области
                    компетенции компании – всё это неотъемлемые составляющие
                    успешной стратегии связей с общественностью.
                  </p>
                  <p className="text-2xl mt-0 ">
                    Пример: Запуск комплексной PR-кампании с использованием
                    различных каналов коммуникации для максимального охвата
                    аудитории.
                  </p>
                </p>
                <div className="w-1/2 rounded-2xl  overflow-hidden">
                  <img
                    src="https://interforums.ru/img/blog/647ac12b7cae95d2e86f13529a2c58f5.png"
                    className="w-full"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex items-center  justify-center">
            <div className="w-[90%] h-[90%] sli  border-[4px] p-10 border-[#00E8DA] rounded-2xl  flex flex-col ">
              <h1 className="text-3xl text-[#32B7C7] font-extrabold">
                6. Тренды в связях с общественностью:
              </h1>
              <div className="flex gap-5 mt-10 ">
                <div className="w-1/2 rounded-2xl  overflow-hidden">
                  <img
                    src="https://pr.uz/wp-content/uploads/2023/02/imidzh-pr-99-700x460.png"
                    className="w-full"
                    alt=""
                  />
                </div>
                <p className="text-xl w-1/2 flex flex-col justify-between ">
                  Современные тенденции в связях с общественностью подчеркивают
                  значимость интерактивности и вовлеченности. <br />
                  <br /> Использование новых технологий, включая виртуальную и
                  дополненную реальность, а также активное участие в обсуждениях
                  в социальных сетях, формируют эффективные коммуникационные
                  стратегии.
                  <p className="text-2xl mt-0 ">
                    Пример: Применение технологии виртуальной реальности для
                    создания интерактивной презентации продукта.
                  </p>
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex items-center  justify-center">
            <div className="w-[90%] h-[90%] sli  border-[4px] p-10 border-[#00E8DA] rounded-2xl  flex flex-col ">
              <h1 className="text-3xl text-[#32B7C7] font-extrabold">
                7. Связи с общественностью и спонсорские программы:
              </h1>
              <div className="flex gap-5 mt-10 ">
                <p className="text-xl w-1/2">
                  Интеграция связей с общественностью и спонсорских программ
                  предоставляет компаниям возможность усилить воздействие на
                  целевую аудиторию. <br />
                  <br /> Это не только формирует позитивное восприятие, но и
                  создает мост между брендом и обществом.
                </p>
                <div className="w-1/2 rounded-2xl  overflow-hidden">
                  <img
                    src="https://interforums.ru/img/blog/c91b31f4bf98e4b46360ec5ce58746e7.jpg"
                    className="w-full"
                    alt=""
                  />
                </div>
              </div>
              <div className="flex gap-5 mt-5 overflow-hidden">
                <p className="text-2xl mt-0 w-1/2">
                  Пример: Реализация специальных спонсорских программ,
                  направленных на решение социальных и экологических проблем.
                </p>
                <div className="w-1/2 rounded-2xl  overflow-hidden"></div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex items-center  justify-center">
            Slide 9
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default App;
