export const questions = [
  {
    id: 1,
    title:
      "Согласно Кодексу об административных правонарушениях Грузии, создание препятствия для транспортного средства имеющего преимущество проезда повлечет:",
    answerOptions: [
      {
        id: 1,
        title:
          "Лишение права управления транспортным средством сроком на 1 год",
        isCorrect: true,
      },
      { id: 2, title: "Штраф в размере 500 лари", isCorrect: false },
      { id: 3, title: "Предупреждение", isCorrect: false },
    ],
    explanation:
      "Согласно грузинскому законодательству, водителю, создающему препятствие для транспортного средства, имеющего преимущество проезда, может грозить лишение права управления транспортным средством на срок до 1 года.",
  },
  {
    id: 2,
    title:
      "Водителю запрещается управление механическим транспортным средством:",
    answerOptions: [
      {
        id: 1,
        title:
          "Только в случае приостановления соответствующего права на управление",
        isCorrect: false,
      },
      {
        id: 2,
        title:
          "Только в случае лишения или прекращения (аннулирования) соответствующего права на управление",
        isCorrect: false,
      },
      {
        id: 3,
        title:
          "Как в случае приостановления соответствующего права на управление, так и в случае лишения или прекращения (аннулирования) этого права на управление",
        isCorrect: true,
      },
    ],
    explanation:
      "Согласно грузинскому закону о дорожном движении, водителю запрещается управление транспортным средством как в случае приостановления, так и в случае лишения или аннулирования права на управление.",
  },
  {
    id: 3,
    title:
      "Обязан ли водитель пройти проверку для установления опьянения-трезвости, на основании требования уполномоченного лица Министерства Внутренних Дел Грузии, если существует достаточно оснований того, что водитель находится в состоянии алкогольного, наркотического и психотропного опьянения?",
    answerOptions: [
      { id: 1, title: "Обязан", isCorrect: true },
      { id: 2, title: "Не обязан", isCorrect: false },
    ],
    explanation:
      "Водитель обязан пройти проверку на опьянение, если есть достаточные основания полагать, что он находится под влиянием алкоголя, наркотиков или психотропных веществ.",
  },
  {
    id: 4,
    title:
      "На территории Грузии водитель обязан иметь с собой соответствующий заверенный перевод документов регистрации транспортного средства и водительские права, если в них указанные данные:",
    answerOptions: [
      {
        id: 1,
        title:
          "Не выполнено грузинскими буквами, но выполнено латинскими буквами",
        isCorrect: false,
      },
      {
        id: 2,
        title:
          "Не выполнено латинскими буквами, но выполнено грузинскими буквами",
        isCorrect: false,
      },
      {
        id: 3,
        title: "Не выполнено грузинскими или латинскими буквами",
        isCorrect: true,
      },
    ],
    explanation:
      "Водитель обязан иметь при себе перевод документов, если данные в них не выполнены грузинскими или латинскими буквами.",
  },
  {
    id: 5,
    title:
      "В случае отсутствия собственника, при пересечении его транспортным средством государственной границы или въезде на территорию страны, обязан ли водитель иметь при себе документ удостоверяющий правомочие владения, пользования или распоряжения данным транспортным средством?",
    answerOptions: [
      { id: 1, title: "Обязан", isCorrect: true },
      { id: 2, title: "Не обязан", isCorrect: false },
    ],
    explanation:
      "Водитель обязан иметь при себе документ, подтверждающий право владения, пользования или распоряжения транспортным средством при пересечении государственной границы.",
  },
  {
    id: 6,
    title: "Пассажиру запрещается:",
    answerOptions: [
      {
        id: 1,
        title:
          "Только перенесение внимания водителя, при управлении двигавшегося транспортного средства, на что-то другое",
        isCorrect: false,
      },
      {
        id: 2,
        title: "Только мешать водителю в управлении транспортного средства",
        isCorrect: false,
      },
      {
        id: 3,
        title:
          "Как перенесение внимания водителя, при управлении двигавшегося транспортного средства, на что-то другое так и мешать водителю в управлении транспортного средства",
        isCorrect: true,
      },
    ],
    explanation:
      "Пассажиру запрещается как перенесение внимания водителя, так и мешать ему в управлении транспортного средства.",
  },
  {
    id: 7,
    title: "При передвижении на проезжей части пешеход:",
    answerOptions: [
      {
        id: 1,
        title: "Только должен выявить максимальную осторожность",
        isCorrect: false,
      },
      {
        id: 2,
        title:
          "Только без основания не должен препятствовать и не должен затруднить движение транспортных средств",
        isCorrect: false,
      },
      {
        id: 3,
        title:
          "Как должен выявить максимальную осторожность, так и без основания не должен препятствовать и не должен затруднить движение транспортных средств",
        isCorrect: true,
      },
    ],
    explanation:
      "Пешеход должен быть максимально осторожен и не препятствовать движению транспортных средств.",
  },
  {
    id: 8,
    title:
      "Можно или нет, чтобы пешеход передвигался по проезжей части дороги в случае отсутствия или невозможности использования дорожки для пешехода, тротуара и окраины пути?",
    answerOptions: [
      {
        id: 1,
        title:
          "Можно, к тому же при перемещении по проезжей части дороги он должен находиться, как только возможно ближе к окраине проезжей части",
        isCorrect: true,
      },
      { id: 2, title: "Нельзя", isCorrect: false },
    ],
    explanation:
      "Пешеход может передвигаться по проезжей части при отсутствии тротуара, но должен находиться как можно ближе к краю проезжей части.",
  },
  {
    id: 9,
    title:
      "Если на переходе нет светофора или не работает светофор предназначенный для пешеходов, движение транспортных средств регулируется с помощью транспортного светофора, пешеход не должен переходить на дорожную часть дороги:",
    answerOptions: [
      {
        id: 1,
        title:
          "До убеждения в расстоянии приближающего транспортного средства, определения его скорости и в безопасности перехода",
        isCorrect: false,
      },
      {
        id: 2,
        title:
          "Пока сигналы светофора или регулировщика на этой проезжей части дают права двигаться транспортным средствам",
        isCorrect: true,
      },
    ],
    explanation:
      "Пешеход не должен переходить дорогу, пока сигналы светофора разрешают движение транспортных средств.",
  },
  {
    id: 10,
    title:
      "На перекрестке в случае отсутствия перехода для пешеходов, пешеход проезжую часть должен пересечь:",
    answerOptions: [
      {
        id: 1,
        title: "Только наименьшей траекторией до намеченного места",
        isCorrect: true,
      },
      {
        id: 2,
        title: "Только вдоль тротуара или боковой стороны",
        isCorrect: false,
      },
    ],
    explanation:
      "Пешеход должен пересекать проезжую часть по наименьшей траектории до намеченного места.",
  },
  {
    id: 11,
    title: "Водитель, участник дорожно-транспортного происшествия обязан:",
    answerOptions: [
      {
        id: 1,
        title:
          "Только незамедлительно остановить (не сдвинуть с места) транспортное средство",
        isCorrect: false,
      },
      {
        id: 2,
        title: "Только включать аварийную светосигнализацию",
        isCorrect: false,
      },
      {
        id: 3,
        title:
          "Как незамедлительно остановить (не сдвинуть с места) транспортное средство, так и включать аварийную светосигнализацию",
        isCorrect: true,
      },
    ],
    explanation:
      "Водитель должен остановить транспортное средство и включить аварийную сигнализацию при ДТП.",
  },
  {
    id: 12,
    title: "Водитель, участник дорожно-транспортного происшествия обязан:",
    answerOptions: [
      {
        id: 1,
        title:
          "Только предпринять необходимые меры для обеспечения на месте дорожно-транспортного происшествия движения безопасности",
        isCorrect: false,
      },
      {
        id: 2,
        title:
          "Только постараться ничего не изменять на месте происшествия или уничтожить след, который возможно будет полезным для установления ответственности",
        isCorrect: false,
      },
      { id: 3, title: "Только записать фамилию свидетелей", isCorrect: false },
      {
        id: 4,
        title: "Выполнить все деяния перечисленные в этом билете",
        isCorrect: true,
      },
    ],
    explanation:
      "Водитель должен предпринять меры безопасности, сохранить следы и записать фамилии свидетелей.",
  },
  {
    id: 13,
    title: "Сколько проезжих частей имеет данная дорога?",
    answerOptions: [
      { id: 1, title: "Один", isCorrect: true },
      { id: 2, title: "Два", isCorrect: false },
      { id: 3, title: "Три", isCorrect: false },
      { id: 4, title: "Четыре", isCorrect: false },
    ],
    explanation:
      "Дорога может иметь одну или несколько проезжих частей, разделённых полосами.",
  },
  {
    id: 14,
    title:
      "До покидания механического транспортного средства водитель должен убедиться:",
    answerOptions: [
      {
        id: 1,
        title:
          "Только в том обстоятельстве, что принял все необходимые меры осторожности для предотвращения дорожно-транспортного происшествия",
        isCorrect: false,
      },
      {
        id: 2,
        title:
          "Только в том обстоятельстве, что принял все меры, чтобы механическое транспортное средство не было использовано без разрешения.",
        isCorrect: false,
      },
      {
        id: 3,
        title:
          "Что принял все необходимые меры предосторожности для избежания дорожно-транспортного происшествия, так же все меры, чтобы механическое транспортное средство не были использованы без разрешения.",
        isCorrect: true,
      },
    ],
    explanation:
      "Водитель должен принять все меры для предотвращения ДТП и защиты транспортного средства от несанкционированного использования.",
  },
  {
    id: 15,
    title: "До въезда на пешеходный переход водитель должен убедиться, что:",
    answerOptions: [
      {
        id: 1,
        title: "Поверхность перехода не обледеневшая",
        isCorrect: false,
      },
      {
        id: 2,
        title:
          "На переходе с противоположного направления не движется другое транспортное средство",
        isCorrect: false,
      },
      {
        id: 3,
        title: "Не будет вынужден остановиться на нем",
        isCorrect: true,
      },
    ],
    explanation:
      "Водитель должен убедиться, что он не будет вынужден остановиться на пешеходном переходе.",
  },
  {
    id: 16,
    title: "Преимущество (приоритет) это:",
    answerOptions: [
      {
        id: 1,
        title:
          "Обязательство участника дорожного движения не осуществить маневр, если это вынудит участника другого дорожного движения внезапно изменить скорость или направление",
        isCorrect: false,
      },
      {
        id: 2,
        title:
          "Право участника дорожного движения, по сравнению с другими участниками дорожного движения двигаться первым в намеренном направлении",
        isCorrect: true,
      },
    ],
    explanation:
      "Преимущество – это право участника дорожного движения двигаться первым по сравнению с другими.",
  },
  {
    id: 17,
    title:
      "«Недостаточной видимостью» считается, уменьшение видимости дороги при проезде в туннеле, в темное время суток, тумане, дожде, снеге и других природных явлений:",
    answerOptions: [
      { id: 1, title: "На расстоянии менее 300 метров", isCorrect: true },
      { id: 2, title: "На расстоянии менее 500 метров", isCorrect: false },
      { id: 3, title: "На расстоянии менее 600 метров", isCorrect: false },
    ],
    explanation:
      "Недостаточная видимость – это видимость дороги на расстоянии менее 300 метров.",
  },
  {
    id: 18,
    title: "«Разделительная полоса» это:",
    answerOptions: [
      {
        id: 1,
        title:
          "Часть дороги, которая обыкновенно используется для движения без рельсовых транспортных средств",
        isCorrect: false,
      },
      {
        id: 2,
        title:
          "Отмеченная продольным дорожным знаком или неотмеченная любая полоса с тех продольных полос, которыми могут быть разделены проезжая часть дороги",
        isCorrect: false,
      },
      {
        id: 3,
        title:
          "Конструктивно выделенный элемент дороги, который разделяет смежные проезжие части и не предназначен для движения безрельсовых транспортных средств",
        isCorrect: true,
      },
    ],
    explanation:
      "Разделительная полоса – это конструктивно выделенный элемент дороги, который разделяет смежные проезжие части.",
  },
  {
    id: 19,
    title:
      "Кроме проезжих частей из ниже перечисленных элементов может содержать дорога?",
    answerOptions: [
      {
        id: 1,
        title: "Только рельсовые пути трамвая и тротуары",
        isCorrect: false,
      },
      { id: 2, title: "Только обочины и разделяющие полосы", isCorrect: false },
      { id: 3, title: "Только велотропинки", isCorrect: false },
      {
        id: 4,
        title:
          "Как рельсовые пути трамвая, так же тротуары, обочины, разделяющие полосы и велотропинки",
        isCorrect: true,
      },
    ],
    explanation:
      "Дорога может включать рельсовые пути, тротуары, обочины, разделительные полосы и велотропинки.",
  },
  {
    id: 20,
    title: "«Перекресток» это:",
    answerOptions: [
      {
        id: 1,
        title:
          "Место пересечения, соединения или разветвления дорог на одном уровне, включая территории возникшие таким пересечением, соединением или разветвлением",
        isCorrect: true,
      },
      {
        id: 2,
        title: "Пересечения выездов и дорог с прилегающих территорий",
        isCorrect: false,
      },
      {
        id: 3,
        title: "Пересечение проезжих частей существующих на разном уровне",
        isCorrect: false,
      },
    ],
    explanation:
      "Перекресток – это место пересечения или соединения дорог на одном уровне.",
  },
  {
    id: 21,
    title: "«Населенный пункт» это:",
    answerOptions: [
      {
        id: 1,
        title: "Любая территория, на которой заселен народ",
        isCorrect: false,
      },
      {
        id: 2,
        title:
          "Любая дорога, которая предназначена для интенсивного движения пешеходов",
        isCorrect: false,
      },
      {
        id: 3,
        title:
          "Обустроенная территория, где въезд и выезд отмечены соответствующими дорожными знаками",
        isCorrect: true,
      },
    ],
    explanation:
      "Населенный пункт – это обустроенная территория, въезд и выезд на которую отмечены дорожными знаками.",
  },
  {
    id: 22,
    title: "«Загруженная масса» это:",
    answerOptions: [
      {
        id: 1,
        title:
          "Масса транспортного средства без водителя, пассажиров и груза, но полным запасом топлива и с полным комплектом необходимых снаряжений",
        isCorrect: false,
      },
      {
        id: 2,
        title:
          "Масса транспортного средства без водителя и пассажиров определенная заводом-изготовителем",
        isCorrect: false,
      },
      {
        id: 3,
        title:
          "Фактическая масса транспортного средства, включая водителя и пассажиров загруженного в промежутке данного времени",
        isCorrect: true,
      },
    ],
    explanation:
      "Загруженная масса – это фактическая масса транспортного средства, включая водителя и пассажиров.",
  },
  {
    id: 23,
    title: "«Незагруженная масса» это:",
    answerOptions: [
      {
        id: 1,
        title:
          "Масса транспортного средства без водителя и пассажиров определенная заводом-изготовителем, но включая полный запас топлива и полный комплект необходимых снаряжений",
        isCorrect: true,
      },
      {
        id: 2,
        title:
          "Фактическая масса транспортного средства, включая водителя и пассажиров незагруженного в промежутке данного времени",
        isCorrect: false,
      },
      {
        id: 3,
        title:
          "Масса транспортного средства без водителя и пассажиров определенная регистрационной службой",
        isCorrect: false,
      },
    ],
    explanation:
      "Незагруженная масса – это масса транспортного средства без водителя и пассажиров, но с полным запасом топлива.",
  },
  {
    id: 24,
    title: "«Темное время суток» значит:",
    answerOptions: [
      {
        id: 1,
        title: "Промежуток времени с 18 часов до 24 часов",
        isCorrect: false,
      },
      {
        id: 2,
        title: "Промежуток времени с рассвета до сумерек",
        isCorrect: false,
      },
      {
        id: 3,
        title: "Промежуток времени с сумерек до рассвета",
        isCorrect: true,
      },
    ],
    explanation:
      "Темное время суток – это промежуток времени с сумерек до рассвета.",
  },
  {
    id: 25,
    title: "«Прилегающая территория» это:",
    answerOptions: [
      {
        id: 1,
        title:
          "Территория, непосредственно прилегающая к дороге и не предназначенная для сквозного движения транспортных средств",
        isCorrect: true,
      },
      {
        id: 2,
        title:
          "Дорожный элемент, который предназначен для движения безрельсового транспортного средства",
        isCorrect: false,
      },
      {
        id: 3,
        title: "Пересечение, соединение или разветвление дорог на одном уровне",
        isCorrect: false,
      },
    ],
    explanation:
      "Прилегающая территория – это территория, прилегающая к дороге, не предназначенная для сквозного движения транспортных средств.",
  },
  {
    id: 26,
    title: "«Полоса движения» это:",
    answerOptions: [
      {
        id: 1,
        title:
          "Конструктивно выделенный дорожный элемент, который разделяет рядом находящие проезжие части",
        isCorrect: false,
      },
      {
        id: 2,
        title: "Вся поверхность дороги или улицы открытая для движения",
        isCorrect: false,
      },
      {
        id: 3,
        title:
          "Отмеченная или неотмеченная средством дорожного знака, любая полоса из продольных полос, которыми могут быть разделена проезжая часть, но у которой есть достаточная ширина для движения в один ряд автомобильного транспорта отличающего от мотоцикла",
        isCorrect: true,
      },
    ],
    explanation:
      "Полоса движения – это любая полоса, достаточно широкая для движения в один ряд автомобильного транспорта.",
  },
  {
    id: 27,
    title: "«Разрешенная максимальная масса» это:",
    answerOptions: [
      {
        id: 1,
        title:
          "Фактическая масса загруженного транспортного средства в промежутке указанного времени, включая водителя и пассажиров",
        isCorrect: false,
      },
      {
        id: 2,
        title:
          "Масса транспортного средства в оснащенном состоянии, заполненного водителем и пассажирами, грань которого устанавливает завод-изготовитель транспортного средства",
        isCorrect: false,
      },
      {
        id: 3,
        title:
          "Максимальная масса загруженного транспортного средства, которая объявлена допустимой компетентным органом того государства, в котором зарегистрировано отмеченное транспортное средство",
        isCorrect: true,
      },
    ],
    explanation:
      "Разрешенная максимальная масса – это максимальная допустимая масса транспортного средства, установленная компетентным органом.",
  },
  {
    id: 28,
    title: "«тихоходное Транспортное средство» это:",
    answerOptions: [
      {
        id: 1,
        title:
          "Моторное или безмоторное транспортное средство, конструктивная скорость которого не превышает 45 км/ч",
        isCorrect: false,
      },
      {
        id: 2,
        title:
          "Моторное транспортное средство, конструктивная скорость которого не превышает 40 км/ч, или которое не может превысить отмеченную скорость, или запрещается превышение по той причине, которая не связана с потоком транспортных средств",
        isCorrect: true,
      },
      {
        id: 3,
        title:
          "Любое транспортное средство, которое по дороге перемещается на скорости не более 50 км/ч",
        isCorrect: false,
      },
    ],
    explanation:
      "Тихоходное транспортное средство – это транспортное средство, чья конструктивная скорость не превышает 40 км/ч.",
  },
  {
    id: 29,
    title: "«Маршрутно-транспортное средство» это:",
    answerOptions: [
      {
        id: 1,
        title:
          "Любой автобус, количество сидячих мест которого кроме места водителя, превышает 16",
        isCorrect: false,
      },
      {
        id: 2,
        title:
          "Транспортное средство, предназначенное для перевозки по дороге пассажиров движущееся по установленному маршруту",
        isCorrect: true,
      },
      {
        id: 3,
        title:
          "Любое транспортное средство, которое предназначено для перевоза груза или людей",
        isCorrect: false,
      },
    ],
    explanation:
      "Маршрутно-транспортное средство – это транспортное средство, движущееся по установленному маршруту для перевозки пассажиров.",
  },
  {
    id: 30,
    title: "«Тротуар» это:",
    answerOptions: [
      {
        id: 1,
        title:
          "Элемент дороги, присоединен к проезжей части или отделен от нее конструктивно или газоном и предназначен для движения пешеходов",
        isCorrect: true,
      },
      {
        id: 2,
        title:
          "Тропинка, отделенная от дороги, предназначена для движения пешеходов",
        isCorrect: false,
      },
      {
        id: 3,
        title: "Любая дорога, предназначенная для движения пешеходов",
        isCorrect: false,
      },
    ],
    explanation:
      "Тротуар – это элемент дороги, который присоединен к проезжей части и предназначен для движения пешеходов.",
  },
  {
    id: 31,
    title: "«Пешеходная тропинка» это:",
    answerOptions: [
      {
        id: 1,
        title:
          "Дорожный элемент, который присоединен к проезжей части и предназначен для движения пешехода",
        isCorrect: false,
      },
      {
        id: 2,
        title:
          "Предназначена для движения пешеходов, тропинка разделенная от дороги. Пешеходная тропинка может быть отмечена соответствующим дорожным знаком",
        isCorrect: true,
      },
      {
        id: 3,
        title:
          "Любой отрезок дороги, которая предназначена для движения пешеходов",
        isCorrect: false,
      },
    ],
    explanation:
      "Пешеходная тропинка – это тропинка, отделенная от дороги и предназначенная для движения пешеходов.",
  },
  {
    id: 32,
    title: "«Ограниченная видимость» это:",
    answerOptions: [
      {
        id: 1,
        title:
          "Уменьшение видимости на дороге на расстоянии менее 300 метров при проходе в туннеле, в темное время суток, во время тумана, дождя, снега или других природных явлений",
        isCorrect: true,
      },
      {
        id: 2,
        title:
          "Обстоятельство, во время которого, короткий поворот, конец подъема, озеленение, постройка у края дороги или преграда существующая на дороге, так уменьшает видимость дороги по направления движения, что на отмеченном отрезке дороги движение разрешенной скоростью, может вызвать опасность",
        isCorrect: false,
      },
    ],
    explanation:
      "Ограниченная видимость – это уменьшение видимости на дороге на расстоянии менее 300 метров.",
  },
  {
    id: 33,
    title:
      "Из ниже перечисленных транспортных средств, которое «Механическое транспортное средство»?",
    answerOptions: [
      { id: 1, title: "Двухколесный электрический самокат", isCorrect: false },
      {
        id: 2,
        title: "Мопед и приравненные к нему транспортные средства",
        isCorrect: true,
      },
      { id: 3, title: "Трамвай", isCorrect: false },
      {
        id: 4,
        title: "Ни один из перечисленных в этом билете",
        isCorrect: false,
      },
    ],
    explanation:
      "Механическое транспортное средство – это мопед и приравненные к нему транспортные средства.",
  },
  {
    id: 34,
    title:
      "Из нижеперечисленных в каких случаях считается транспортное средство на территории какого-нибудь государства находящим «В международном движении»:",
    answerOptions: [
      {
        id: 1,
        title:
          "Только в том случае, если он принадлежит физическому или юридическому лицу, у которого обыкновенное место жительство находится вне этого государства",
        isCorrect: false,
      },
      {
        id: 2,
        title:
          "Только в том случае, если он не зарегистрирован в этом государстве",
        isCorrect: false,
      },
      {
        id: 3,
        title:
          "Только в том случае, если оно в страну ввезено на время, но не более срока установленного законодательством этого государства",
        isCorrect: false,
      },
      {
        id: 4,
        title: "В любых случаях перечисленных в этом билете",
        isCorrect: true,
      },
    ],
    explanation:
      "Транспортное средство находится в международном движении, если оно удовлетворяет одному из перечисленных условий.",
  },
  {
    id: 35,
    title: "«Транспортное средство» это:",
    answerOptions: [
      {
        id: 1,
        title:
          "Движущее на дороге или принадлежащее для движения на ней, только то моторное оборудование, которое обыкновенно применяется на дороге для перевозки людей или для перевозки груза",
        isCorrect: false,
      },
      {
        id: 2,
        title:
          "Движущее на дороге или оборудованное для движения на ней, которое перемещается мотором или с использованием другой силы",
        isCorrect: true,
      },
    ],
    explanation:
      "Транспортное средство – это устройство, движущее на дороге или предназначенное для движения на ней с использованием мотора или другой силы.",
  },
  {
    id: 36,
    title: "«Полная масса» транспортного средства это:",
    answerOptions: [
      {
        id: 1,
        title: "Масса транспортного средства без экипажа, пассажиров и груза",
        isCorrect: false,
      },
      {
        id: 2,
        title:
          "Масса в данный промежуток времени загруженного транспортного средства, экипажа и пассажиров",
        isCorrect: false,
      },
      {
        id: 3,
        title:
          "Масса транспортного средства находящего в снаряженном состоянии, грузом, экипажем и заполненными пассажирами, грань которой устанавливает завод-изготовитель транспортного средства",
        isCorrect: true,
      },
    ],
    explanation:
      "Полная масса транспортного средства – это масса транспортного средства в снаряженном состоянии, включая груз, экипаж и пассажиров.",
  },
  {
    id: 37,
    title:
      "На той дороге с двухсторонним движением, у которой есть разделительная полоса, стороной встречного движения считается:",
    answerOptions: [
      {
        id: 1,
        title: "Проезжая часть, находящаяся налево от разделительной полосы",
        isCorrect: true,
      },
      {
        id: 2,
        title: "Проезжая часть, находящаяся направо от разделительной полосы",
        isCorrect: false,
      },
      {
        id: 3,
        title: "Ни один из перечисленных в этом билете",
        isCorrect: false,
      },
    ],
    explanation:
      "На дороге с двухсторонним движением встречное движение осуществляется по проезжей части, находящейся налево от разделительной полосы.",
  },
  {
    id: 38,
    title:
      "Если водитель не может определить существование на дороге покрова (из-за темноты, снега, грязи или по другой причине) и нет знаков приоритета, считается, что он находится:",
    answerOptions: [
      { id: 1, title: "На второстепенной дороге", isCorrect: true },
      { id: 2, title: "На главной дороге", isCorrect: false },
      {
        id: 3,
        title: "На дороге, уравненной к автомагистрали",
        isCorrect: false,
      },
    ],
    explanation:
      "Если водитель не может определить существование покрытия дороги, он должен считать, что находится на второстепенной дороге.",
  },
  {
    id: 39,
    title:
      "В том случае, если на дороге, на машине организации проводящей дорожные работы, требования установленного временного дорожного знака противятся требованиям дорожных знаков установленных стационарно на том же участке дороги, водитель обязан исполнить:",
    answerOptions: [
      {
        id: 1,
        title: "Требование стационарно уставленных дорожных знаков",
        isCorrect: false,
      },
      {
        id: 2,
        title:
          "Требования временного дорожного знака уставленного на машине организации проводящей дорожные работы",
        isCorrect: true,
      },
    ],
    explanation:
      "Водитель обязан подчиняться временным дорожным знакам, установленным на машине организации, проводящей дорожные работы.",
  },
  {
    id: 40,
    title:
      "Право на вождение мотоцикла, автобуса, легкового и грузового автомобиля имеет исключительно лицо:",
    answerOptions: [
      {
        id: 1,
        title:
          "Состояние здоровья, которого соответствует требованиям определенным законодательством Грузии к состоянию здоровья нужным для управления транспортным средства.",
        isCorrect: false,
      },
      {
        id: 2,
        title:
          "Которым законодательством Грузии определенным правилом было присвоено право на управление транспортным средством соответствующей категории или/же подкатегории и это право не приостановлено или прекращено.",
        isCorrect: false,
      },
      {
        id: 3,
        title: "Которое удовлетворяет все условия, перечисленные в этом билете",
        isCorrect: true,
      },
    ],
    explanation:
      "Право на управление транспортным средством имеет лицо, которое соответствует всем перечисленным требованиям.",
  },
];

export const a = [];
