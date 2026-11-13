export const projects = [
  {
    "slug": "modeling",
    "collection": true,
    "title": {
      "zh": "建模作品集",
      "en": "3D Portfolio",
      "ja": "3D作品集",
      "ko": "3D 작품집",
      "ru": "3D-портфолио"
    },
    "description": {
      "zh": "四个建模与场景项目。选择作品，查看成品展示、参考整理、制作过程与工具。",
      "en": "Four modeling and environment projects. Select a work to explore the renders, references, process and tools.",
      "ja": "4つのモデリング・環境制作プロジェクト。作品を選ぶと、完成画像、参考資料、制作工程、使用ツールを確認できます。",
      "ko": "네 개의 모델링·환경 제작 프로젝트입니다. 작품을 선택하면 완성 이미지, 참고 자료, 제작 과정과 사용 도구를 볼 수 있습니다.",
      "ru": "Четыре проекта по моделированию и созданию окружения. Выберите работу, чтобы посмотреть готовые изображения, исходные материалы, этапы создания и инструменты."
    }
  },
  {
    "slug": "rhodes",
    "title": {
      "zh": "罗德岛号",
      "en": "Rhodes Island Landship",
      "ja": "ロドスの陸上艦",
      "ko": "로도스 아일랜드 육상함",
      "ru": "Сухопутный корабль Rhodes Island"
    },
    "description": {
      "zh": "以《明日方舟》罗德岛号为参考的陆行舰复刻，围绕舰体比例、分板、履带与灯具逐步完善细节。展示荒原中的完整舰体、船尾与夜间灯光。",
      "en": "A landship study based on Rhodes Island from Arknights, developed through hull proportions, paneling, tracks and lighting. The gallery presents the ship in a desert setting and at night.",
      "ja": "『アークナイツ』のロドス艦を参考にした陸上艦の再現。船体の比率、外板の分割、履帯、照明器具を順に調整しました。荒野の全景、船尾、夜間照明を掲載しています。",
      "ko": "『명일방주』의 로도스 아일랜드를 참고한 육상함 재현 작업입니다. 선체 비율, 외판 분할, 궤도와 조명 기구를 단계적으로 다듬었습니다. 황야의 전체 선체, 선미와 야간 조명을 전시합니다.",
      "ru": "Воссоздание сухопутного корабля Rhodes Island из Arknights. Пропорции корпуса, панели, гусеницы и светильники прорабатывались поэтапно. В галерее представлены корабль в пустоши, кормовая часть и ночное освещение."
    },
    "credit": {
      "zh": "角色与世界观来自《明日方舟》，模型与画面为同人制作。",
      "en": "Fan work based on the characters and world of Arknights.",
      "ja": "キャラクターと世界観は『アークナイツ』に基づくファン制作です。",
      "ko": "캐릭터와 세계관은 『명일방주』에 기반한 팬 창작입니다.",
      "ru": "Фанатская работа по мотивам персонажей и мира Arknights."
    },
    "thumb": "./assets/projects/rhodes-thumb.jpg",
    "gallery": [
      {
        "src": "./assets/projects/rhodes-1.jpg",
        "caption": {
          "zh": "荒原中的罗德岛号",
          "en": "Rhodes Island in the desert",
          "ja": "荒野のロドス艦",
          "ko": "황야의 로도스 아일랜드",
          "ru": "Rhodes Island в пустоши"
        }
      },
      {
        "src": "./assets/projects/rhodes-2.jpg",
        "caption": {
          "zh": "船尾与上层结构",
          "en": "Stern and superstructure",
          "ja": "船尾と上部構造",
          "ko": "선미와 상부 구조",
          "ru": "Кормовая часть и надстройки"
        }
      },
      {
        "src": "./assets/projects/rhodes-3.jpg",
        "caption": {
          "zh": "夜间灯光",
          "en": "Night lighting",
          "ja": "夜間照明",
          "ko": "야간 조명",
          "ru": "Ночное освещение"
        }
      }
    ],
    "process": {
      "tools": "Blender · Python · Cycles · Godot",
      "steps": [
        {
          "title": {
            "zh": "参考整理与比例校准",
            "en": "References and proportions",
            "ja": "参考資料と比率の調整",
            "ko": "참고 자료 정리와 비율 조정",
            "ru": "Референсы и пропорции"
          },
          "body": {
            "zh": "以官方授权成品模型的多角度照片为主要参考，先提取舰体轮廓、甲板层级、烟囱和跑道的位置，再反推照片机位。在相同视角下比较模型与参考，反复校准长度、宽度和上层建筑的高度。",
            "en": "The study starts with multi-angle photographs of the officially licensed scale model. Hull silhouettes, deck levels, chimney and runway positions guide the blockout. Fitted cameras make it possible to compare matching views and refine the ship’s proportions.",
            "ja": "公式ライセンス付き完成品模型の多方向写真を主な資料とし、船体の輪郭、甲板の階層、煙突、滑走路の位置を整理しました。写真のカメラ位置を推定し、同じ視点で比較しながら全長、幅、上部構造の高さを調整しています。",
            "ko": "공식 라이선스 완성 모형의 여러 방향 사진을 주된 자료로 삼았습니다. 선체 윤곽, 갑판 층위, 굴뚝과 활주로 위치를 정리한 뒤 사진의 카메라 위치를 추정했습니다. 같은 시점에서 비교하며 길이, 폭과 상부 구조의 높이를 조정했습니다.",
            "ru": "Основой стали фотографии официальной лицензионной модели с разных сторон. Сначала были выделены силуэт корпуса, уровни палуб, положение трубы и взлётной полосы, затем восстановлены положения камер. Сравнение с одинаковых ракурсов позволило уточнить длину, ширину и высоту надстроек."
          }
        },
        {
          "title": {
            "zh": "从大体块到机械细节",
            "en": "From blockout to mechanical detail",
            "ja": "大きな形状から機械的な細部へ",
            "ko": "큰 형태에서 기계적 세부로",
            "ru": "От крупных форм к механическим деталям"
          },
          "body": {
            "zh": "用 Python 脚本分层搭建主舰体、分板和小构件，逐步加入履带单元、支撑、管线、栏杆和机库。复核承重关系后，将外排履带收回舰体下方，并同步调整支架与沙地车辙的位置。",
            "en": "Python scripts build the hull, panel divisions and smaller components in layers. Tracks, supports, pipes, railings and hangars are added after the large forms. A later review moves the outer tracks beneath the hull and updates the supports and desert track marks.",
            "ja": "Pythonで船体、外板、小部品を段階的に構築し、履帯ユニット、支持部、配管、手すり、格納庫を追加しました。荷重を支える構造を再検討して外側の履帯を船体の下へ移し、支持部と砂地の走行跡も修正しました。",
            "ko": "Python으로 선체, 외판과 작은 부품을 단계적으로 구성하고 궤도 유닛, 지지대, 배관, 난간과 격납고를 추가했습니다. 하중을 받치는 관계를 검토한 뒤 바깥쪽 궤도를 선체 아래로 옮기고 지지대와 모래 위 주행 흔적도 함께 수정했습니다.",
            "ru": "Скрипты Python поэтапно создавали корпус, панели и мелкие элементы. Затем были добавлены гусеничные блоки, опоры, трубы, ограждения и ангары. После проверки несущей схемы внешние гусеницы перемещены под корпус; одновременно исправлены опоры и следы движения на песке."
          },
          "image": {
            "src": "./assets/projects/rhodes-process-tracks.jpg",
            "caption": {
              "zh": "履带位置与支撑关系的修改对照；下方附官方模型参考。",
              "en": "Track-layout revisions, with official scale-model references at the bottom.",
              "ja": "履帯と支持構造の修正比較。下段は公式模型の参考写真。",
              "ko": "궤도 위치와 지지 구조의 수정 비교. 아래에는 공식 모형 참고 사진을 배치했습니다.",
              "ru": "Сравнение расположения гусениц и опор до и после правок; внизу — фотографии официальной модели."
            }
          }
        },
        {
          "title": {
            "zh": "舰体材质与灯具重做",
            "en": "Hull materials and lighting",
            "ja": "船体マテリアルと照明器具",
            "ko": "선체 재질과 조명 기구 개선",
            "ru": "Материалы корпуса и светильники"
          },
          "body": {
            "zh": "材质经过多轮调整，逐步加入钢板明暗、焊缝、补漆、锈水和棱边磨损，让表面在光线下显出板块层次。灯光也从简单发光面改为带灯壳、支架和透镜的灯具，再为夜景配置实际光源。",
            "en": "Several material passes introduce plate-to-plate variation, welds, repair paint, rust streaks and edge wear. The changing reflections help describe the hull’s panel structure. Simple emissive patches are developed into modeled fixtures with housings and lenses, then paired with lights for the night views.",
            "ja": "鋼板ごとの明暗、溶接跡、補修塗装、さびの流れ、角の摩耗を重ね、光の反射で外板の構成が読めるようにしました。単純な発光面は、筐体・支持具・レンズを持つ器具に置き換え、夜景用の光源を配置しています。",
            "ko": "강판별 명암, 용접선, 보수 도장, 녹물과 모서리 마모를 더해 반사광으로 외판의 층위가 드러나게 했습니다. 단순 발광면은 하우징, 지지대와 렌즈가 있는 기구로 교체하고 야경용 실제 광원을 배치했습니다.",
            "ru": "Различия между стальными листами, сварные швы, ремонтная окраска, потёки ржавчины и износ кромок делают структуру обшивки заметной в отражениях. Простые светящиеся плоскости заменены приборами с корпусами, креплениями и линзами, дополненными источниками света для ночных кадров."
          },
          "image": {
            "src": "./assets/projects/rhodes-process-materials.jpg",
            "caption": {
              "zh": "写实化调整前后，比较舰体表面、履带与灯具。",
              "en": "Before-and-after views of the hull surface, tracks and lighting details.",
              "ja": "船体表面、履帯、照明器具の写実化前後。",
              "ko": "선체 표면, 궤도와 조명 기구의 사실화 전후 비교.",
              "ru": "Сравнение обработки поверхности корпуса, гусениц и светильников."
            }
          }
        },
        {
          "title": {
            "zh": "多机位渲染与实时展示",
            "en": "Rendering and real-time presentation",
            "ja": "複数視点のレンダリングとリアルタイム表示",
            "ko": "다중 시점 렌더와 실시간 전시",
            "ru": "Рендеры и показ в реальном времени"
          },
          "body": {
            "zh": "在荒原、近景与夜景中分别检查整体轮廓、材质和细节，再输出展示图。另将材质烘焙并导出到 Godot，检查实时环境中的比例、贴图和舰体层次。",
            "en": "Desert views, close-ups and night renders check the silhouette, materials and small details at different scales. Baked materials and a Godot export provide a separate real-time view of the model’s proportions and surface treatment.",
            "ja": "荒野、近接、夜景の各視点で輪郭、素材、細部を確認して展示画像を出力しました。マテリアルをベイクしてGodotにも書き出し、リアルタイム環境で比率、テクスチャ、船体の立体感を確認しています。",
            "ko": "황야, 근접 화면과 야경에서 전체 윤곽, 재질과 세부를 점검한 뒤 전시 이미지를 출력했습니다. 재질을 베이크해 Godot으로 내보내고 실시간 환경에서 비율, 텍스처와 선체의 입체감을 확인했습니다.",
            "ru": "Общий вид в пустоши, крупные планы и ночные кадры использовались для проверки силуэта, материалов и деталей. Материалы также запекались для экспорта в Godot, где проверялись пропорции, текстуры и объём корпуса в реальном времени."
          }
        }
      ]
    },
    "parent": "modeling"
  },
  {
    "slug": "t84",
    "title": {
      "zh": "T-84 · 向日葵花海",
      "en": "T-84 · Sunflower Field",
      "ja": "T-84・ひまわり畑",
      "ko": "T-84 · 해바라기 들판",
      "ru": "Т-84 · Подсолнечное поле"
    },
    "description": {
      "zh": "以 BM Oplot 主战坦克为对象，结合实车照片与侧视资料制作外观，并放进向日葵花田场景。蓝天、金黄花田与胶片颗粒共同构成这组画面。",
      "en": "An exterior modeling study of the BM Oplot tank using vehicle photographs and side-view references. A sunflower-field setting combines a blue sky, golden flowers and film grain.",
      "ja": "BM Oplot主力戦車を、実車写真と側面資料を参照して外観制作し、ひまわり畑に配置した作品です。青空、黄金色の花畑、フィルム粒子を組み合わせています。",
      "ko": "BM Oplot 주력전차를 대상으로 실차 사진과 측면 자료를 참고해 외관을 제작하고 해바라기 들판에 배치했습니다. 파란 하늘, 황금빛 꽃밭과 필름 그레인을 조합한 이미지입니다.",
      "ru": "Модель внешнего облика основного танка БМ «Оплот», созданная по фотографиям машины и боковым проекциям и помещённая в поле подсолнухов. Голубое небо, золотистые цветы и плёночное зерно формируют серию изображений."
    },
    "credit": {
      "zh": "向日葵素材改编自 soufiane oujihi 的 Sunflower 3D（CC BY）；天空等部分素材来自 Poly Haven（CC0）。",
      "en": "Sunflower asset adapted from Sunflower 3D by soufiane oujihi (CC BY). Sky and selected materials from Poly Haven (CC0).",
      "ja": "ひまわり素材はsoufiane oujihiのSunflower 3D（CC BY）を改変。空などの一部素材はPoly Haven（CC0）より。",
      "ko": "해바라기는 soufiane oujihi의 Sunflower 3D(CC BY)를 수정해 사용했습니다. 하늘 등 일부 자료는 Poly Haven(CC0)에서 가져왔습니다.",
      "ru": "Подсолнухи переработаны из Sunflower 3D автора soufiane oujihi (CC BY). Небо и часть других материалов — Poly Haven (CC0)."
    },
    "thumb": "./assets/projects/t84-thumb.jpg",
    "gallery": [
      {
        "src": "./assets/projects/t84-1.jpg",
        "caption": {
          "zh": "向日葵花海 · 主镜头",
          "en": "Sunflower field · main view",
          "ja": "ひまわり畑・メインカメラ",
          "ko": "해바라기 들판 · 주 카메라",
          "ru": "Подсолнечное поле · главный ракурс"
        }
      },
      {
        "src": "./assets/projects/t84-2.jpg",
        "caption": {
          "zh": "沿田间道路的侧面视角",
          "en": "Side view along the field road",
          "ja": "畑の道に沿った側面視点",
          "ko": "밭길을 따라 본 측면",
          "ru": "Вид сбоку вдоль полевой дороги"
        }
      },
      {
        "src": "./assets/projects/t84-3.jpg",
        "caption": {
          "zh": "车体与炮塔近景",
          "en": "Hull and turret close-up",
          "ja": "車体と砲塔の近景",
          "ko": "차체와 포탑 근접 화면",
          "ru": "Корпус и башня крупным планом"
        }
      }
    ],
    "process": {
      "tools": "Blender · Python · Cycles",
      "steps": [
        {
          "title": {
            "zh": "重测车体与炮塔比例",
            "en": "Revising the hull and turret",
            "ja": "車体と砲塔の比率を再検証",
            "ko": "차체와 포탑 비율 재검토",
            "ru": "Проверка пропорций корпуса и башни"
          },
          "body": {
            "zh": "先用车辆尺寸资料建立模型标尺，再结合实车照片与 War Thunder 的侧视参考，核对炮塔高度、炮轴、侧裙与轮组的位置。初版偏长、偏扁的轮廓经过重做，并通过正交侧视叠图继续检查。",
            "en": "Vehicle dimensions establish the model’s scale. Photographs and a War Thunder side-view reference help check turret height, gun axis, side skirts and wheel positions. The early silhouette is revised and checked again with an orthographic overlay.",
            "ja": "車両寸法を基準に縮尺を設定し、実車写真とWar Thunderの側面資料で砲塔高、砲軸、サイドスカート、転輪位置を確認しました。初期モデルの長すぎて平たい輪郭を作り直し、正投影の側面画像を重ねて再確認しています。",
            "ko": "차량 치수로 기준 축척을 만든 뒤 실차 사진과 War Thunder 측면 자료로 포탑 높이, 포축, 사이드 스커트와 차륜 위치를 검토했습니다. 너무 길고 납작했던 초기 윤곽을 다시 만들고 정사영 측면 이미지를 겹쳐 확인했습니다.",
            "ru": "Размеры машины задали масштаб модели. Фотографии и боковой вид из War Thunder помогли проверить высоту башни, ось орудия, экраны и ходовую часть. Слишком длинный и плоский ранний силуэт был переработан и повторно проверен наложением ортографических проекций."
          },
          "image": {
            "src": "./assets/projects/t84-process-proportions.jpg",
            "caption": {
              "zh": "早期模型、修改版与游戏参考的比例检查。游戏参考版权归 Gaijin Entertainment。",
              "en": "Proportion checks across early and revised models and a game reference. Game reference © Gaijin Entertainment.",
              "ja": "初期モデル、修正版、ゲーム資料の比率比較。ゲーム資料の権利はGaijin Entertainmentに帰属します。",
              "ko": "초기 모형, 수정본과 게임 자료의 비율 비교. 게임 자료의 권리는 Gaijin Entertainment에 있습니다.",
              "ru": "Сравнение пропорций ранней модели, исправленной версии и игрового референса. Права на игровой материал принадлежат Gaijin Entertainment."
            }
          }
        },
        {
          "title": {
            "zh": "硬表面细化与旧化",
            "en": "Hard-surface detail and weathering",
            "ja": "ハードサーフェスと使用感",
            "ko": "하드서피스 세부와 웨더링",
            "ru": "Детализация и следы эксплуатации"
          },
          "body": {
            "zh": "在大形稳定后加入反应装甲、螺栓、合页、拖曳钢缆和观瞄设备。军绿漆面按构件增加色差，再叠加积灰、泥污、雨水痕与掉漆；扶手、螺栓和装甲棱边增加露钢与高光。",
            "en": "Once the main forms settle, the model gains armor blocks, bolts, hinges, tow cables and optical equipment. Per-part paint variation is combined with dust, mud, rain streaks and chipped edges. Exposed steel and highlights give small fittings more definition.",
            "ja": "大きな形状を固めてから反応装甲、ボルト、蝶番、牽引ケーブル、照準装置を追加しました。軍用緑の塗装に部品ごとの色差、ほこり、泥、雨だれ、塗装剥がれを加え、手すりや装甲の角には露出した鋼材とハイライトを入れています。",
            "ko": "큰 형태를 확정한 뒤 반응장갑, 볼트, 경첩, 견인 케이블과 조준 장비를 추가했습니다. 군용 녹색 도장에 부품별 색차를 주고 먼지, 진흙, 빗물 자국과 벗겨진 도장을 겹쳤습니다. 손잡이, 볼트와 장갑 모서리에는 노출된 강철과 하이라이트를 더했습니다.",
            "ru": "После уточнения крупных форм добавлены динамическая защита, болты, петли, буксировочные тросы и прицельные приборы. Окраска получила различия оттенков между деталями, пыль, грязь, дождевые потёки и сколы. На поручнях, болтах и кромках брони показаны открытый металл и блики."
          }
        },
        {
          "title": {
            "zh": "花田与长焦构图",
            "en": "Sunflower field and camera composition",
            "ja": "花畑と望遠構図",
            "ko": "꽃밭과 망원 구도",
            "ru": "Поле и длиннофокусная композиция"
          },
          "body": {
            "zh": "主镜头按参考样张选择约 85 mm 的长焦，并抬高田间路基，让车体在花田上方保持可见。向日葵素材调整为多种生长姿态，再用实例化铺成花田，通过株高、朝向与间距变化减少重复感。",
            "en": "An approximately 85 mm lens follows the reference composition. A raised field road keeps the hull visible above the flowers. The sunflower asset is adapted into several growing poses, then instanced with variations in height, orientation and spacing.",
            "ja": "参考画像に合わせて主カメラを約85 mmに設定し、畑の道を高くして花の上に車体が見えるようにしました。ひまわりに複数の成長姿勢を用意し、インスタンス配置で高さ、向き、間隔を変えて反復感を抑えています。",
            "ko": "참고 이미지에 맞춰 주 카메라를 약 85 mm로 설정하고 밭길의 지반을 높여 꽃밭 위로 차체가 보이게 했습니다. 해바라기를 여러 성장 자세로 변형해 인스턴스로 배치하고 키, 방향과 간격을 달리해 반복감을 줄였습니다.",
            "ru": "Для основного ракурса по референсу выбрано фокусное расстояние около 85 мм. Дорога приподнята, чтобы корпус оставался виден над цветами. Несколько вариантов подсолнухов распределены экземплярами с разной высотой, ориентацией и интервалами, уменьшая повторяемость."
          }
        },
        {
          "title": {
            "zh": "天空方案与胶片后期",
            "en": "Sky variations and film treatment",
            "ja": "空の選定とフィルム調の仕上げ",
            "ko": "하늘 선정과 필름 후반 작업",
            "ru": "Выбор неба и плёночная обработка"
          },
          "body": {
            "zh": "比较多种天空后，确定蓝天、白云与金黄花田的组合。Cycles 输出多机位 4K 静帧，再加入偏暖的曲线、轻微光晕、暗角和颗粒，同时保留干净版用于观察模型细节。",
            "en": "Several sky treatments lead to the blue-sky, white-cloud and golden-field palette. Multi-angle 4K Cycles renders receive warm tonal curves, subtle halation, vignetting and grain. Clean versions are also retained for inspecting the model.",
            "ja": "複数の空を比較し、青空、白い雲、黄金色の花畑の組み合わせを採用しました。Cyclesで複数視点の4K静止画を出力し、暖色寄りのカーブ、弱い光のにじみ、周辺減光、粒子を追加。細部確認用に加工前の画像も残しています。",
            "ko": "여러 하늘을 비교한 뒤 파란 하늘, 흰 구름과 황금빛 꽃밭을 선택했습니다. Cycles로 여러 시점의 4K 정지 이미지를 출력하고 따뜻한 곡선 보정, 약한 글로우, 비네팅과 그레인을 더했습니다. 모델 세부 확인용 원본도 함께 보관했습니다.",
            "ru": "После сравнения вариантов выбрано сочетание голубого неба, белых облаков и золотистого поля. Cycles вывел статичные 4K-кадры с нескольких камер. Затем добавлены тёплые кривые, слабое свечение, виньетка и зерно; для оценки деталей сохранены необработанные изображения."
          },
          "image": {
            "src": "./assets/projects/t84-process-sky.jpg",
            "caption": {
              "zh": "天空与整体色调的前后对照。",
              "en": "Before-and-after comparison of the sky and overall color treatment.",
              "ja": "空と全体の色調の比較。",
              "ko": "하늘과 전체 색조의 전후 비교.",
              "ru": "Сравнение неба и общего цветового решения."
            }
          }
        }
      ]
    },
    "sources": [
      {
        "label": "Sunflower 3D · soufiane oujihi",
        "url": "https://sketchfab.com/3d-models/sunflower-3d-966d0bee6e204d9ca927a601cf85cbc2"
      }
    ],
    "parent": "modeling"
  },
  {
    "slug": "linan",
    "title": {
      "zh": "南宋临安城",
      "en": "Southern Song Lin’an",
      "ja": "南宋・臨安城",
      "ko": "남송 임안성",
      "ru": "Линьань эпохи Южная Сун"
    },
    "description": {
      "zh": "参考南宋古地图，并结合现代地形与地理锚点搭建临安城和西湖。通过三维场景与后期合成呈现水墨全景，以及御街、城门和苏堤等局部。复原中的尺度与位置包含解释性取舍。",
      "en": "A reconstruction study of Lin’an and West Lake based on historic maps, modern terrain and geographic anchors. A 3D scene and compositing produce an ink-wash panorama and architectural details, with interpretive choices in scale and placement.",
      "ja": "南宋の古地図に現代地形と地理的基準点を重ね、臨安城と西湖を構築しました。3Dと合成処理による水墨画風の全景と、御街、城門、蘇堤などの近景を掲載。尺度や位置には解釈上の調整を含みます。",
      "ko": "남송 시대 고지도에 현대 지형과 지리 기준점을 결합해 임안성과 서호를 구성했습니다. 3D 장면과 합성으로 수묵화풍 전경 및 어가, 성문, 소제의 세부를 표현했습니다. 복원의 축척과 위치에는 해석적 선택이 포함됩니다.",
      "ru": "Линьань и озеро Сиху построены по старым картам Южной Сун с учётом современного рельефа и географических ориентиров. 3D-сцена и композитинг создают панораму в стиле тушевой живописи и виды Императорской улицы, городских ворот и дамбы Су. Масштаб и расположение отдельных объектов включают интерпретационные решения."
    },
    "credit": {
      "zh": "资料来源包括《咸淳临安志》、G. E. Moule 古城图、Copernicus DEM、OpenStreetMap。",
      "en": "Sources include historic Lin’an maps, G. E. Moule, Copernicus DEM and OpenStreetMap.",
      "ja": "参考資料：『咸淳臨安志』、G. E. Mouleの古城図、Copernicus DEM、OpenStreetMap。",
      "ko": "참고 자료: 『함순임안지』, G. E. Moule의 고성 지도, Copernicus DEM, OpenStreetMap.",
      "ru": "Источники: «Сяньчунь Линьань чжи», карта старого города G. E. Moule, Copernicus DEM и OpenStreetMap."
    },
    "thumb": "./assets/projects/linan-thumb.jpg",
    "gallery": [
      {
        "src": "./assets/projects/linan-1.jpg",
        "caption": {
          "zh": "临安城与西湖全景",
          "en": "Panorama of Lin’an and West Lake",
          "ja": "臨安城と西湖の全景",
          "ko": "임안성과 서호 전경",
          "ru": "Панорама Линьаня и озера Сиху"
        }
      },
      {
        "src": "./assets/projects/linan-2.jpg",
        "caption": {
          "zh": "御街与朝天门",
          "en": "Imperial Street and Chaotian Gate",
          "ja": "御街と朝天門",
          "ko": "어가와 조천문",
          "ru": "Императорская улица и ворота Чаотяньмэнь"
        }
      },
      {
        "src": "./assets/projects/linan-3.jpg",
        "caption": {
          "zh": "苏堤六桥",
          "en": "Six bridges of Su Causeway",
          "ja": "蘇堤の六橋",
          "ko": "소제의 여섯 다리",
          "ru": "Шесть мостов дамбы Су"
        }
      }
    ],
    "process": {
      "tools": "Blender · Python · EEVEE · NumPy",
      "steps": [
        {
          "title": {
            "zh": "古地图与现代地理对齐",
            "en": "Aligning historical maps and geography",
            "ja": "古地図と現代地理の対応付け",
            "ko": "고지도와 현대 지리의 정합",
            "ru": "Совмещение старых карт с современной географией"
          },
          "body": {
            "zh": "以《咸淳临安志》地图和古城复绘为依据，结合现代遗址位置、Copernicus 高程与 OpenStreetMap 水系道路数据，确定城墙、皇城、御街、河道和西湖之间的布局关系。",
            "en": "Historical Lin’an maps and later redrawings are aligned with surviving sites, Copernicus elevation data and OpenStreetMap waterways and roads. These anchors establish the relationships between the city walls, palace, Imperial Street, canals and West Lake.",
            "ja": "『咸淳臨安志』の地図と古城の復元図をもとに、現存遺構の位置、Copernicusの標高、OpenStreetMapの河川・道路を参照し、城壁、皇城、御街、河川、西湖の配置関係を整理しました。",
            "ko": "『함순임안지』 지도와 고성 복원도를 바탕으로 현대 유적 위치, Copernicus 고도와 OpenStreetMap 수계·도로 자료를 결합했습니다. 이를 통해 성벽, 황성, 어가, 하천과 서호의 배치 관계를 정했습니다.",
            "ru": "Карты из «Сяньчунь Линьань чжи» и реконструкции старого города сопоставлены с расположением сохранившихся объектов, высотами Copernicus и водной и дорожной сетью OpenStreetMap. Это определило взаимное положение стен, императорского города, главной улицы, каналов и озера."
          },
          "image": {
            "src": "./assets/projects/linan-process-plan.jpg",
            "caption": {
              "zh": "建模阶段的全域布局俯视图，查看城墙、水系与建筑分布。",
              "en": "Top-down planning view of the walls, waterways and building distribution.",
              "ja": "制作途中の全域俯瞰図。城壁、水系、建物の分布を確認。",
              "ko": "모델링 단계의 전체 배치 조감도. 성벽, 수계와 건물 분포를 확인했습니다.",
              "ru": "Общий вид плана на этапе моделирования: стены, водная сеть и распределение зданий."
            }
          }
        },
        {
          "title": {
            "zh": "程序化搭建城市",
            "en": "Procedural city construction",
            "ja": "都市のプロシージャル構築",
            "ko": "도시의 절차적 구성",
            "ru": "Процедурное построение города"
          },
          "body": {
            "zh": "先生成地形和城市规划，再按街区、建筑类型与地势批量布置民居、铺面、寺观和宫殿。城楼、雷峰塔等地标单独处理；民居以程序化示意表达城市密度，并保留历史位置存在分歧时的解释性取舍。",
            "en": "Terrain and a city plan come first, followed by procedural placement of houses, shops, temples and palace buildings. Gates and landmark towers receive individual treatment. Generated housing conveys urban density, while uncertain historic locations remain interpretive choices.",
            "ja": "地形と都市計画を先に生成し、街区、建物種別、地勢に応じて住宅、店舗、寺院、宮殿を配置しました。城楼や雷峰塔などの目印は個別に制作。住宅群は都市密度を示す模式表現とし、歴史的位置に異説がある箇所は解釈上の選択を残しています。",
            "ko": "지형과 도시 계획을 먼저 생성하고 구역, 건물 종류와 지세에 따라 주택, 점포, 사원과 궁전을 배치했습니다. 성루와 뇌봉탑 등 주요 지형지물은 따로 제작했습니다. 주거지는 도시 밀도를 나타내는 절차적 도식으로 표현하고 역사적 위치에 이견이 있는 곳은 해석적 선택을 남겼습니다.",
            "ru": "После рельефа и планировки жилые дома, лавки, храмы и дворцы распределялись по кварталам, типам и местности. Башни ворот и пагода Лэйфэн создавались отдельно. Жилая застройка схематично передаёт плотность города; спорные исторические положения отмечены как интерпретационные решения."
          }
        },
        {
          "title": {
            "zh": "机位与全景可读性",
            "en": "Camera studies and visual readability",
            "ja": "視点と全景の読みやすさ",
            "ko": "시점과 전경의 가독성",
            "ru": "Камеры и читаемость панорамы"
          },
          "body": {
            "zh": "通过高低机位比较城市与西湖的关系，确定斜俯瞰的全景视角。为让远景中的山形、塔和城门清晰可辨，对部分高度和尺度进行有记录的夸张，再为御街、苏堤等区域设置局部镜头。",
            "en": "Camera studies compare how the city and lake read from different heights. An oblique aerial view becomes the panorama. Documented scale exaggerations help mountains, towers and gates remain legible, and separate cameras explore Imperial Street, Su Causeway and other details.",
            "ja": "高低の異なるカメラで都市と西湖の関係を比較し、斜め上からの全景を選定しました。遠景の山、塔、城門が読めるよう、一部の高さや尺度を記録した上で誇張し、御街や蘇堤には個別カメラを設定しています。",
            "ko": "높고 낮은 카메라로 도시와 서호의 관계를 비교해 비스듬한 조감 구도를 선택했습니다. 먼 산, 탑과 성문이 구분되도록 일부 높이와 축척을 기록한 뒤 과장하고, 어가와 소제에는 별도의 근접 카메라를 배치했습니다.",
            "ru": "Сравнение высоких и низких ракурсов помогло выбрать наклонный общий вид города и озера. Чтобы горы, башни и ворота читались вдали, часть высот и масштабов была намеренно увеличена с фиксацией этих изменений. Для улицы и дамбы назначены отдельные камеры."
          },
          "image": {
            "src": "./assets/projects/linan-process-camera.jpg",
            "caption": {
              "zh": "前期全景机位方案，比较俯角与城市覆盖范围。",
              "en": "Early panorama camera studies comparing viewing angle and city coverage.",
              "ja": "初期の全景カメラ案。俯角と都市の見える範囲を比較。",
              "ko": "초기 전경 카메라 구도. 내려다보는 각도와 도시가 보이는 범위를 비교했습니다.",
              "ru": "Ранние варианты общей камеры: сравнение угла наклона и охвата города."
            }
          }
        },
        {
          "title": {
            "zh": "从渲染通道到水墨画面",
            "en": "From render passes to ink wash",
            "ja": "レンダーパスから水墨画へ",
            "ko": "렌더 패스에서 수묵 이미지로",
            "ru": "От рендер-проходов к тушевой живописи"
          },
          "body": {
            "zh": "EEVEE 分别输出法线、深度、遮挡、底色与分类遮罩。后期从通道变化提取墨线，叠加墨色分层、皴纹、云雾、岸线和宣纸纹理，并按镜头调整浓淡，最终输出 8K 全景与七处景致特写。",
            "en": "EEVEE provides normal, depth, occlusion, base-color and category-mask passes. Compositing extracts ink edges and combines tonal layers, texture strokes, mist, shorelines and paper texture. Per-camera adjustments produce an 8K panorama and seven detail views.",
            "ja": "EEVEEで法線、深度、遮蔽、基本色、分類マスクを出力しました。各パスの変化から墨線を抽出し、墨の濃淡、筆触、雲霧、岸線、宣紙の質感を重ねています。視点ごとに調整し、8K全景と7か所の近景を出力しました。",
            "ko": "EEVEE로 노멀, 깊이, 차폐, 기본색과 분류 마스크를 출력했습니다. 패스의 변화에서 먹선을 추출하고 먹의 농담, 준법 질감, 구름과 안개, 물가와 선지 질감을 더했습니다. 시점별 농담을 조정해 8K 전경과 일곱 곳의 근접 이미지를 출력했습니다.",
            "ru": "EEVEE вывел нормали, глубину, затенение, базовые цвета и маски классов. Перепады в проходах использованы для извлечения линий туши, затем добавлены тональные слои, штрихи, туман, береговые контуры и фактура бумаги сюань. После настройки каждого ракурса выведены 8K-панорама и семь детальных видов."
          }
        }
      ]
    },
    "parent": "modeling"
  },
  {
    "slug": "night-plaza",
    "title": {
      "zh": "信濃町夜景复刻",
      "en": "Shinanomachi · Night Scene",
      "ja": "信濃町の夜景再現",
      "ko": "시나노마치 야경 재현",
      "ru": "Ночная сцена в Синаномати"
    },
    "description": {
      "zh": "以车站口广场的夜景照片为参考，复刻商店灯箱、石墙、台阶、栏杆与路面等环境细节。通过机位匹配、材质与灯光调整，重现照片中偏青的夜景色调。图组包含终稿、整体对照与局部细节。",
      "en": "A night-scene reconstruction based on a photograph of a station plaza, with shop signs, stone walls, stairs, railings and paving. Camera matching, materials and lighting recreate the cool-toned atmosphere. The gallery includes the final render and reference comparisons.",
      "ja": "駅前広場の夜景写真を参考に、店舗の看板、石壁、階段、手すり、舗装を再現しました。カメラ、素材、照明を合わせ、写真の青緑寄りの色調を再現。完成画像、全体比較、細部比較を掲載しています。",
      "ko": "역 앞 광장의 야간 사진을 참고해 상점 라이트박스, 돌담, 계단, 난간과 포장을 재현했습니다. 카메라, 재질과 조명을 맞춰 사진의 청록빛 색조를 재현했습니다. 최종본, 전체 비교와 세부 비교를 함께 제공합니다.",
      "ru": "Реконструкция ночной фотографии привокзальной площади: световые вывески, каменные стены, лестницы, ограждения и мощение. Подбор камеры, материалов и света воспроизводит холодный зеленовато-голубой тон снимка. Представлены финальный рендер, общее сопоставление и детали."
    },
    "credit": {
      "zh": "场景按参考照片搭建，部分材质与道具使用 CC0／公有领域资源，来源包括 ambientCG、Poly Haven。",
      "en": "Reconstructed from a reference photograph, using some CC0 and public-domain materials and props from sources including ambientCG and Poly Haven.",
      "ja": "参考写真に基づくシーン制作。一部の素材・小物にはambientCG、Poly HavenなどのCC0／パブリックドメイン素材を使用。",
      "ko": "참고 사진에 따라 제작한 장면입니다. 일부 재질과 소품은 ambientCG, Poly Haven 등의 CC0·퍼블릭 도메인 자료를 사용했습니다.",
      "ru": "Сцена построена по референсной фотографии. Часть материалов и объектов взята из ресурсов CC0 и общественного достояния, включая ambientCG и Poly Haven."
    },
    "thumb": "./assets/projects/night-plaza-thumb.jpg",
    "gallery": [
      {
        "src": "./assets/projects/night-plaza-1.jpg",
        "caption": {
          "zh": "夜景终稿",
          "en": "Final night scene",
          "ja": "夜景の完成画像",
          "ko": "야경 최종본",
          "ru": "Финальный ночной рендер"
        }
      },
      {
        "src": "./assets/projects/night-plaza-2.jpg",
        "caption": {
          "zh": "参考照片与复刻画面对照",
          "en": "Reference photograph and reconstructed scene",
          "ja": "参考写真と再現画像の比較",
          "ko": "참고 사진과 재현 이미지 비교",
          "ru": "Сопоставление фотографии и реконструкции"
        }
      },
      {
        "src": "./assets/projects/night-plaza-3.jpg",
        "caption": {
          "zh": "六处局部细节对照",
          "en": "Six detail comparisons",
          "ja": "6か所の細部比較",
          "ko": "여섯 곳의 세부 비교",
          "ru": "Шесть детальных сравнений"
        }
      }
    ],
    "process": {
      "tools": "Blender · Python · Cycles",
      "steps": [
        {
          "title": {
            "zh": "从照片反推相机",
            "en": "Solving the camera from the photograph",
            "ja": "写真からカメラを推定",
            "ko": "사진에서 카메라 역추정",
            "ru": "Восстановление камеры по фотографии"
          },
          "body": {
            "zh": "从墙缝、立柱等竖线估计消失点，再利用地面上互相垂直的线反推焦距。确定约 69 mm 的等效焦距和约 9.7 m 的相机高度后，先渲染地面网格与竖杆，叠回参考照片检查透视。",
            "en": "Vertical wall joints and posts help estimate the vanishing point; perpendicular ground lines constrain focal length. An approximately 69 mm equivalent lens and 9.7 m camera height are checked by overlaying a rendered ground grid and vertical markers on the photograph.",
            "ja": "壁の継ぎ目や柱の垂直線から消失点を求め、地面の直交線から焦点距離を推定しました。約69 mm相当、カメラ高約9.7 mとした後、地面グリッドと垂直棒をレンダリングして写真に重ね、透視を確認しています。",
            "ko": "벽의 이음새와 기둥의 수직선으로 소실점을 추정하고 지면의 직교선으로 초점거리를 구했습니다. 약 69 mm 상당의 초점거리와 약 9.7 m의 카메라 높이를 정한 뒤 지면 격자와 수직 막대를 렌더해 사진에 겹쳐 원근을 확인했습니다.",
            "ru": "Вертикали стен и столбов использованы для оценки точек схода, а взаимно перпендикулярные линии земли — для восстановления фокусного расстояния. После выбора эквивалента около 69 мм и высоты камеры около 9,7 м сетка земли и вертикальные стержни отрендерены поверх фотографии для проверки перспективы."
          },
          "image": {
            "src": "./assets/projects/night-plaza-process-camera.jpg",
            "caption": {
              "zh": "早期相机核对图，地面网格与竖杆叠在参考照片上。",
              "en": "Early camera check with a ground grid and vertical markers over the reference photograph.",
              "ja": "初期のカメラ確認画像。地面グリッドと垂直棒を写真に重ねたもの。",
              "ko": "초기 카메라 확인 이미지. 지면 격자와 수직 막대를 참고 사진에 겹쳤습니다.",
              "ru": "Ранняя проверка камеры: сетка земли и вертикальные стержни поверх фотографии."
            }
          }
        },
        {
          "title": {
            "zh": "按透视搭建广场",
            "en": "Building the plaza from projected measurements",
            "ja": "透視に沿った広場の構築",
            "ko": "원근에 맞춘 광장 구성",
            "ru": "Построение площади по перспективе"
          },
          "body": {
            "zh": "在相机固定后反投影照片中的位置，逐步搭建铺装、石墙、台阶、露台、灯箱和栏杆。对照边缘叠图修正墙体朝向、邮筒高度和楼梯外沿，让关键轮廓与参考更接近。",
            "en": "With the camera fixed, back-projected measurements guide the paving, wall, stairs, terrace, signs and railings. Edge overlays reveal adjustments to the wall orientation, postbox height and stair beam, bringing the main outlines closer to the reference.",
            "ja": "カメラを固定して写真上の位置を逆投影し、舗装、石壁、階段、テラス、看板、手すりを制作しました。輪郭の重ね合わせで壁の向き、郵便ポストの高さ、階段外縁を調整し、主要な形状を参考に近づけています。",
            "ko": "카메라를 고정한 뒤 사진의 위치를 역투영해 포장, 돌담, 계단, 테라스, 라이트박스와 난간을 구성했습니다. 윤곽을 겹쳐 벽의 방향, 우체통 높이와 계단 외곽을 수정하고 주요 윤곽을 참고 사진에 가깝게 맞췄습니다.",
            "ru": "После фиксации камеры позиции на фотографии обратно проецировались в сцену. Так постепенно создавались мощение, стены, лестницы, террасы, вывески и ограждения. Наложение контуров помогло исправить направления стен, высоту почтового ящика и внешние границы ступеней."
          }
        },
        {
          "title": {
            "zh": "材质、灯光与暗部层次",
            "en": "Materials, light groups and shadow detail",
            "ja": "素材、照明、暗部の階調",
            "ko": "재질, 조명과 암부의 계조",
            "ru": "Материалы, свет и градации теней"
          },
          "body": {
            "zh": "铺装、花岗岩、不锈钢和植物结合程序化处理与 CC0 素材完成。将灯箱、店内、地灯和补光分组渲染，按照片分区亮度拟合强度，并分别控制灯箱自身的画面亮度和周围照明。",
            "en": "Procedural work and CC0 assets provide paving, granite, steel and plants. Separate render groups for signs, shop lighting, ground lamps and fill lights are fitted to regional brightness in the photograph. Visible sign brightness and illumination of nearby surfaces are controlled separately.",
            "ja": "舗装、花崗岩、ステンレス、植物には手続き的な処理とCC0素材を併用しました。看板、店内、地面照明、補助光を分けてレンダリングし、写真の領域別の明るさに合わせて強度を調整。看板自身の見え方と周辺照明を別々に制御しています。",
            "ko": "포장, 화강암, 스테인리스와 식물은 절차적 처리와 CC0 자료를 결합했습니다. 라이트박스, 실내, 지면 조명과 보조광을 분리 렌더해 사진의 영역별 밝기에 강도를 맞췄습니다. 라이트박스 자체의 화면 밝기와 주변 조명은 따로 제어했습니다.",
            "ru": "Покрытие, гранит, нержавеющая сталь и растения созданы сочетанием процедурных методов и CC0-материалов. Вывески, интерьер, наземный свет и заполнение рендерились раздельно. Интенсивности подбирались по яркости зон фотографии; яркость самих вывесок регулировалась отдельно от освещения окружения."
          },
          "image": {
            "src": "./assets/projects/night-plaza-process-raw.jpg",
            "caption": {
              "zh": "调色前的渲染阶段，用于检查材质与各区域的明暗关系。",
              "en": "Render before final grading, used to inspect materials and regional lighting.",
              "ja": "色調整前のレンダリング。素材と各領域の明暗を確認。",
              "ko": "색 보정 전 렌더 단계. 재질과 영역별 명암을 확인했습니다.",
              "ru": "Рендер до цветокоррекции для проверки материалов и яркости отдельных зон."
            }
          }
        },
        {
          "title": {
            "zh": "色调匹配与局部复核",
            "en": "Color matching and detail review",
            "ja": "色調の一致と細部の再確認",
            "ko": "색조 일치와 세부 검토",
            "ru": "Цветовое соответствие и проверка деталей"
          },
          "body": {
            "zh": "后期拟合逐通道曲线与大尺度明暗，补入灯箱光晕、轻微柔化和颗粒。压暗楼梯与左上背景后，输出 4796×2700 终稿，再用整体并排图和六处局部对照复核；照片中难以辨认的暗部结构采用推测性简化。",
            "en": "Channel curves and broad tonal adjustments establish the final grade, followed by sign glow, mild softening and grain. Darkening the stairs and upper-left background leads to a 4796×2700 final render, reviewed in full-frame and six-detail comparisons. Obscured structures are simplified where the photograph provides limited information.",
            "ja": "チャンネル別カーブと大域的な明暗を合わせ、看板の光のにじみ、弱いぼかし、粒子を追加しました。階段と左上の背景を暗くし、4796×2700の完成画像を出力。全体と6か所の比較で再確認し、写真で判別できない暗部は推測に基づき簡略化しています。",
            "ko": "채널별 곡선과 넓은 영역의 명암을 맞추고 라이트박스 글로우, 약한 블러와 그레인을 더했습니다. 계단과 왼쪽 위 배경을 어둡게 한 뒤 4796×2700 최종본을 출력하고 전체 및 여섯 곳의 세부 비교로 재검토했습니다. 사진에서 판별하기 어려운 암부 구조는 추정해 단순화했습니다.",
            "ru": "Поканальные кривые и крупномасштабные перепады яркости подогнаны к снимку, добавлены свечение вывесок, слабое размытие и зерно. После затемнения лестницы и левого верхнего фона выведен финал 4796×2700. Общий вид и шесть фрагментов проверены отдельно; неразличимые в тени конструкции упрощены предположительно."
          }
        }
      ]
    },
    "parent": "modeling"
  },
  {
    "slug": "yufi",
    "title": {
      "zh": "Yufi · 桌面助手",
      "en": "Yufi · Desktop Assistant",
      "ja": "Yufi・デスクトップアシスタント",
      "ko": "Yufi · 데스크톱 도우미",
      "ru": "Yufi · Настольный помощник"
    },
    "description": {
      "zh": "基于开源 Dela 改造的桌面助手，将 Canvas 课程资料、课堂录音转写、本地项目文件与内置终端放在同一个工作台。源码现已公开。",
      "en": "A desktop assistant adapted from open-source Dela, combining Canvas course materials, lecture recording and transcription, local project files and an integrated terminal. The source is public.",
      "ja": "オープンソースのDelaを改変し、Canvas教材、授業録音と文字起こし、ローカルプロジェクト、内蔵ターミナルを一つの作業環境にまとめたアシスタント。ソースコードを公開しています。",
      "ko": "오픈소스 Dela를 수정해 Canvas 강의 자료, 수업 녹음·전사, 로컬 프로젝트 파일과 내장 터미널을 하나의 작업 공간에 통합한 도우미입니다. 소스 코드를 공개했습니다.",
      "ru": "Помощник на основе открытого Dela, объединяющий материалы Canvas, запись и расшифровку занятий, локальные файлы проектов и встроенный терминал в одном рабочем пространстве. Исходный код опубликован."
    },
    "repository": "https://github.com/Moonyear817/Yufi",
    "gallery": [],
    "credit": {
      "zh": "基于 Dela 改造，遵循 GPL-3.0-or-later；桌面工作台与 Agent 框架来自原项目。",
      "en": "Adapted from Dela under GPL-3.0-or-later. The desktop workspace and agent framework come from the upstream project.",
      "ja": "Delaを改変し、GPL-3.0-or-laterに従っています。デスクトップ環境とAgent基盤は上流プロジェクトに由来します。",
      "ko": "Dela를 기반으로 수정했으며 GPL-3.0-or-later를 따릅니다. 데스크톱 작업 공간과 Agent 프레임워크는 원본 프로젝트에서 가져왔습니다.",
      "ru": "Адаптация Dela по лицензии GPL-3.0-or-later. Рабочее пространство и Agent-фреймворк происходят из исходного проекта."
    },
    "sources": [
      {
        "label": {
          "zh": "Dela 原项目",
          "en": "Dela upstream",
          "ja": "Dela 元プロジェクト",
          "ko": "Dela 원본 프로젝트",
          "ru": "Исходный проект Dela"
        },
        "url": "https://github.com/Chang-Yo/Dela"
      }
    ],
    "process": {
      "tools": "Electron · React · TypeScript · Python · sherpa-onnx",
      "steps": [
        {
          "title": {
            "zh": "在现有工作台上改造",
            "en": "Adapting an existing workspace",
            "ja": "既存の作業環境を改変",
            "ko": "기존 작업 공간의 개조",
            "ru": "Адаптация существующего рабочего пространства"
          },
          "body": {
            "zh": "沿用 Dela 的 Electron 工作台与 Pi Agent 内核，把重点放在课程资料、课堂记录与本地项目的衔接；隐藏当前环境不使用的课表、课堂视频与社区入口。",
            "en": "Retain Dela’s Electron workspace and Pi agent core, focusing on course materials, lecture notes and local projects. Hide timetable, classroom-video and community entries that do not apply to this setup.",
            "ja": "DelaのElectron環境とPi Agentコアを利用し、教材、授業記録、ローカルプロジェクトの連携に重点を置きました。現在の環境で使わない時間割、授業動画、コミュニティの入口は非表示にしています。",
            "ko": "Dela의 Electron 작업 공간과 Pi Agent 코어를 유지하고 강의 자료, 수업 기록과 로컬 프로젝트의 연결에 집중했습니다. 현재 환경에 맞지 않는 시간표, 강의 영상과 커뮤니티 진입점은 숨겼습니다.",
            "ru": "Сохранены Electron-приложение Dela и ядро Pi Agent. Основной акцент сделан на связи материалов курса, записей занятий и локальных проектов. Неприменимые к текущей среде разделы расписания, учебного видео и сообщества скрыты."
          }
        },
        {
          "title": {
            "zh": "Canvas 会话登录与资料整理",
            "en": "Canvas session login",
            "ja": "Canvasのセッション認証と教材整理",
            "ko": "Canvas 세션 로그인과 자료 정리",
            "ru": "Сессионный вход в Canvas и материалы"
          },
          "body": {
            "zh": "通过应用内登录窗口获取会话 Cookie，替代手动填写访问令牌；调整学期名称识别，把课程、课件预览与下载接到工作台。登录与课程同步已做本地验证。",
            "en": "An in-app sign-in window supplies session cookies instead of a manually entered access token. Adapted term-name parsing connects courses, material previews and downloads to the workspace. Sign-in and course sync have been checked locally.",
            "ja": "アプリ内ログイン画面でセッションCookieを取得し、アクセストークンの手入力を置き換えました。学期名の解釈を調整して、授業、教材プレビュー、ダウンロードを接続。ログインと授業同期はローカルで確認済みです。",
            "ko": "앱 내부 로그인 창에서 세션 Cookie를 받아 액세스 토큰 수동 입력을 대체했습니다. 학기명 해석을 조정하고 강좌, 자료 미리보기와 다운로드를 작업 공간에 연결했습니다. 로그인과 강좌 동기화는 로컬에서 검증했습니다.",
            "ru": "Встроенное окно входа получает сессионные Cookie вместо ручного ввода токена. Скорректирован разбор названий семестров, подключены курсы, просмотр материалов и загрузка. Вход и синхронизация курсов проверены локально."
          }
        },
        {
          "title": {
            "zh": "双阶段语音转写与录音回放",
            "en": "Two-stage transcription and playback",
            "ja": "二段階文字起こしと録音再生",
            "ko": "2단계 음성 전사와 녹음 재생",
            "ru": "Двухэтапная расшифровка и воспроизведение"
          },
          "body": {
            "zh": "按课程管理录音，以 SenseVoice 输出实时预览，再用 Qwen3-ASR 完成分句转写。修复 Electron 模块加载和 WebM 时长信息，使录音能显示时长并拖动定位；中英文录音与回放已实测。",
            "en": "Organize recordings by course, using SenseVoice for live previews and Qwen3-ASR for finalized sentence transcripts. Fix Electron module loading and WebM duration metadata so audio displays its duration and supports seeking. Chinese and English recordings and playback were tested.",
            "ja": "録音を授業別に管理し、SenseVoiceでライブプレビュー、Qwen3-ASRで文単位の確定結果を生成します。Electronのモジュール読み込みとWebMの再生時間情報を修正し、長さの表示とシークに対応。中国語・英語の録音と再生を実測しました。",
            "ko": "강좌별로 녹음을 관리하고 SenseVoice로 실시간 미리보기를, Qwen3-ASR로 문장 단위 확정 전사를 생성합니다. Electron 모듈 로딩과 WebM 길이 정보를 수정해 재생 시간 표시와 탐색을 지원했습니다. 중국어·영어 녹음과 재생을 실측했습니다.",
            "ru": "Записи организованы по курсам. SenseVoice даёт предварительный текст в реальном времени, Qwen3-ASR — окончательные фразы. Исправлены загрузка модулей Electron и метаданные длительности WebM, что позволило показывать время и перемещаться по записи. Запись и воспроизведение проверены на китайской и английской речи."
          }
        },
        {
          "title": {
            "zh": "终端适配与当前进度",
            "en": "Terminal fixes and current status",
            "ja": "ターミナル対応と現在の進捗",
            "ko": "터미널 대응과 현재 상태",
            "ru": "Терминал и текущее состояние"
          },
          "body": {
            "zh": "修复 macOS 内置终端的执行权限与启动提示，保留 Microsoft 365 OAuth 接入代码。邮箱仍需租户管理员授权；AI 整理笔记与远程 SSH 尚待实际验证。本次公开开发源码，暂未提供 Yufi 安装包。",
            "en": "Fix macOS terminal helper permissions and startup messages, and retain Microsoft 365 OAuth integration. Mail still requires tenant administrator approval; AI note organization and remote SSH remain unverified in this adaptation. This publication provides source code, with no Yufi installer yet.",
            "ja": "macOSターミナル補助プログラムの実行権限と起動メッセージを修正し、Microsoft 365 OAuthの接続コードを保持しています。メールにはテナント管理者の承認が必要です。AIによるノート整理とリモートSSHは未実測。現時点では開発用ソースのみを公開し、Yufiのインストーラーは提供していません。",
            "ko": "macOS 터미널 보조 프로그램의 실행 권한과 시작 메시지를 수정하고 Microsoft 365 OAuth 연동 코드를 유지했습니다. 메일은 테넌트 관리자의 승인이 필요하며 AI 노트 정리와 원격 SSH는 아직 실제 검증 전입니다. 현재 개발 소스만 공개하며 Yufi 설치 프로그램은 제공하지 않습니다.",
            "ru": "Исправлены права запуска помощника терминала macOS и стартовые сообщения. Код Microsoft 365 OAuth сохранён, но для почты требуется одобрение администратора арендатора. Организация заметок с ИИ и удалённый SSH в этой адаптации ещё не проверены на практике. Опубликованы исходники; установщика Yufi пока нет."
          }
        }
      ]
    }
  },
  {
    "slug": "wandan-index",
    "title": {
      "zh": "持续经营脆弱性指数",
      "en": "Going-Concern Vulnerability Index",
      "ja": "継続企業の脆弱性指数",
      "ko": "계속기업 취약성 지수",
      "ru": "Индекс уязвимости непрерывности деятельности"
    },
    "description": {
      "zh": "持续经营脆弱性指数（GCVI）是面向小型商业组织的状态测度框架。研究以六维经营状态为输入，在非补偿性约束下结合风险聚合与致命否决，并以可行状态枚举处理不完全信息。公开实现包含算法对照、区间计算与形式性质校核。",
      "en": "The Going-Concern Vulnerability Index (GCVI) is a state-measurement framework for small commercial organizations. It combines six-dimensional operating states, risk aggregation under non-compensatory constraints, and fatal-condition vetoes, using feasible-state enumeration to address incomplete information. The public implementation provides comparative rules, interval calculations and formal-property checks.",
      "ja": "GCVIは、小規模な事業組織の継続企業としての脆弱性を測る状態評価の枠組みです。6次元の経営状態を入力とし、非補償的な制約のもとでリスク集約と致命条件の拒否則を組み合わせ、実行可能状態の列挙によって不完全情報を扱います。公開実装には規則比較、区間計算、形式的性質の検証を含みます。",
      "ko": "GCVI는 소규모 사업 조직의 계속기업 취약성을 측정하는 상태 평가 체계입니다. 6차원 경영 상태를 입력으로 사용하고 비보상적 제약 아래 위험 집계와 치명 조건의 거부 규칙을 결합하며, 실행 가능한 상태를 열거해 불완전 정보를 처리합니다. 공개 구현에는 규칙 비교, 구간 계산과 형식적 성질 검증이 포함됩니다.",
      "ru": "GCVI — система измерения текущей уязвимости непрерывности деятельности небольших коммерческих организаций. Шестимерные состояния используются для агрегирования рисков с некомпенсаторными ограничениями и правилом вето по критическим условиям. Неполная информация обрабатывается перечислением допустимых состояний. Открытая реализация включает сравнение правил, интервальные расчёты и проверку формальных свойств."
    },
    "repository": "https://github.com/Moonyear817/gcvi",
    "gallery": [],
    "credit": {
      "zh": "当前成果限于测度规则的形式化与计算实现。62,425 个形式状态不构成企业样本；分档可靠性、参数适用性与外部效度仍需经验研究。指数不解释为破产概率或剩余存续期限。",
      "en": "The current contribution is limited to rule formalization and computational implementation. The 62,425 formal states are not an empirical sample of firms. Grading reliability, parameter applicability and external validity require empirical study. The index is not interpreted as bankruptcy probability or remaining organizational lifetime.",
      "ja": "現在の成果は測定規則の形式化と計算実装に限られます。62,425の形式状態は企業の実証標本ではありません。判定の信頼性、パラメータの適用性、外的妥当性には実証研究が必要です。指数は倒産確率や残存期間を意味しません。",
      "ko": "현재 성과는 측정 규칙의 형식화와 계산 구현에 한정됩니다. 62,425개 형식 상태는 기업 표본이 아닙니다. 등급 판단의 신뢰성, 매개변수의 적용성과 외적 타당성은 경험 연구가 필요합니다. 이 지수는 파산 확률이나 잔여 존속 기간을 뜻하지 않습니다.",
      "ru": "Текущий результат ограничен формализацией правил и вычислительной реализацией. 62 425 формальных состояний не являются выборкой предприятий. Надёжность градаций, применимость параметров и внешняя валидность требуют эмпирических исследований. Индекс не трактуется как вероятность банкротства или оставшийся срок существования."
    },
    "sources": [
      {
        "label": {
          "zh": "方法文档",
          "en": "Methodology",
          "ja": "方法論ドキュメント",
          "ko": "방법론 문서",
          "ru": "Описание методологии"
        },
        "url": "https://github.com/Moonyear817/gcvi/blob/main/docs/method.md"
      }
    ],
    "process": {
      "label": {
        "zh": "研究方法",
        "en": "Methodology",
        "ja": "研究方法",
        "ko": "연구 방법",
        "ru": "Методология"
      },
      "tools": {
        "zh": "Python · 有理数运算 · 状态空间枚举",
        "en": "Python · Rational arithmetic · State-space enumeration",
        "ja": "Python・有理数演算・状態空間の列挙",
        "ko": "Python · 유리수 연산 · 상태 공간 열거",
        "ru": "Python · Рациональная арифметика · Перебор состояний"
      },
      "steps": [
        {
          "title": {
            "zh": "评估对象与状态空间界定",
            "en": "Assessment scope and state space",
            "ja": "評価範囲と状態空間の定義",
            "ko": "평가 대상과 상태 공간 정의",
            "ru": "Объект оценки и пространство состояний"
          },
          "body": {
            "zh": "预先确定评估对象、时点、观察期与证据边界，将现金、业务与收入、交付、团队、治理及必要经营条件编码为六维离散状态。各维度采用五级严重度编码，并记录支持分档的事实依据；缺失信息作为独立状态保留。",
            "en": "Specify the organization, assessment time, observation period and evidence scope in advance. Encode cash, business and revenue, delivery, team, governance and necessary operating conditions as six discrete dimensions. Each dimension uses five severity grades with traceable evidence; missing information remains explicit.",
            "ja": "対象組織、評価時点、観察期間、証拠範囲を事前に定め、資金、事業と収入、提供・履行、チーム、統治、必要な事業条件を6次元の離散状態として符号化します。各次元は5段階の深刻度を用い、根拠となる事実を記録。欠損情報は独立した状態として残します。",
            "ko": "평가 조직, 시점, 관찰 기간과 증거 범위를 사전에 정하고 현금, 사업·수익, 이행, 팀, 지배구조와 필수 경영 조건을 6차원 이산 상태로 부호화합니다. 각 차원은 다섯 단계의 심각도와 근거 사실을 기록하며, 결측 정보는 별도 상태로 유지합니다.",
            "ru": "Заранее задаются организация, момент оценки, период наблюдения и границы доказательств. Денежные средства, деятельность и выручка, исполнение обязательств, команда, управление и необходимые условия кодируются шестью дискретными измерениями с пятью уровнями тяжести. Для каждой градации сохраняются фактические основания; пропуски остаются явными."
          }
        },
        {
          "title": {
            "zh": "非补偿性约束与聚合规则比较",
            "en": "Non-compensatory constraints and aggregation",
            "ja": "非補償的制約と集約規則の比較",
            "ko": "비보상적 제약과 집계 규칙 비교",
            "ru": "Некомпенсаторные ограничения и сравнение правил"
          },
          "body": {
            "zh": "将已核实的致命条件置于聚合层之前，禁止其他维度的优势抵消必要经营功能的失效。非致命层比较两类规则：方案 A 允许风险叠加跨越档位；当前采用的方案 B 优先保持最高严重档的排序，再在档内表达其余风险与已核实作用链。",
            "en": "Place verified fatal conditions before aggregation, preventing favorable dimensions from offsetting failure of a necessary operating function. Compare two non-fatal rules: A permits cumulative risks to cross tiers; the currently adopted B preserves highest-severity-tier priority while representing other risks and verified interaction chains within the tier.",
            "ja": "確認済みの致命条件を集約層より優先し、他の次元の良好さによって必要な事業機能の失敗が相殺されないようにします。非致命層では、リスクの累積による段階上昇を認めるAと、最高深刻度の段階を優先するBを比較。現在のBは同じ段階内で他のリスクと確認済みの相互作用を表します。",
            "ko": "확인된 치명 조건을 집계보다 우선해 다른 차원의 양호한 상태가 필수 경영 기능의 상실을 상쇄하지 못하도록 합니다. 비치명 집계에서는 위험 누적으로 등급 상승을 허용하는 A와 최고 심각도 등급의 순서를 보존하는 B를 비교합니다. 현재 채택한 B는 같은 등급 안에서 나머지 위험과 확인된 상호작용을 반영합니다.",
            "ru": "Подтверждённые критические условия имеют приоритет перед агрегированием: благополучие других измерений не может компенсировать отказ необходимой функции. Правило A допускает повышение уровня за счёт накопления рисков. Принятое сейчас правило B сохраняет приоритет наивысшего уровня тяжести, учитывая остальные риски и подтверждённые цепочки взаимодействия внутри него."
          }
        },
        {
          "title": {
            "zh": "不完全信息下的区间识别",
            "en": "Interval identification with incomplete information",
            "ja": "不完全情報下の区間識別",
            "ko": "불완전 정보하의 구간 식별",
            "ru": "Интервальная идентификация при неполной информации"
          },
          "body": {
            "zh": "以三值逻辑区分条件成立、不成立与未知。致命状态未知或材料未经复核时不发布点值；致命条件已排除、仅部分档位或作用链未定时，在与已知约束相容的可行补全集合上计算上下界，保留缺失项及其对结果范围的影响。",
            "en": "Use three-valued logic to distinguish true, false and unknown conditions. Do not publish a point score when fatal status is unresolved or evidence unreviewed. Once fatal conditions are excluded, compute lower and upper bounds over feasible completions consistent with known constraints, retaining the missing inputs and their effect on the range.",
            "ja": "三値論理で成立、不成立、未知を区別します。致命状態が未知、または証拠が未確認なら点推定値を公表しません。致命条件を排除でき、未確定なのが段階や相互作用のみの場合、既知の制約に整合する実行可能な補完集合から上下限を計算し、欠損項目の影響を残します。",
            "ko": "3값 논리로 성립, 불성립과 미확정을 구분합니다. 치명 상태가 미확정이거나 증거가 검토되지 않았으면 점수를 발표하지 않습니다. 치명 조건이 배제되고 일부 등급이나 상호작용만 미정일 때는 알려진 제약과 양립하는 실행 가능한 보완 집합에서 상·하한을 계산하고 결측 항목이 결과 범위에 미치는 영향을 남깁니다.",
            "ru": "Трёхзначная логика различает истинность, ложность и неизвестность. При неопределённом критическом статусе или непроверенных данных точечная оценка не публикуется. Если критические условия исключены, а неопределённы лишь градации или цепочки, границы вычисляются на допустимых дополнениях, согласованных с известными ограничениями, с сохранением влияния пропусков."
          }
        },
        {
          "title": {
            "zh": "形式性质校核与可复现实现",
            "en": "Formal-property checks and reproducibility",
            "ja": "形式的性質の検証と再現可能な実装",
            "ko": "형식적 성질 검증과 재현 가능한 구현",
            "ru": "Формальные проверки и воспроизводимость"
          },
          "body": {
            "zh": "以有理数实现聚合与取整，避免浮点误差改变显示结果。8 项测试覆盖构造算例、致命优先、缺失信息与输入可行性，并在全部 62,425 个可行形式状态上校核下界、封顶、单项保真、单步单调性及方案 B 的档位区间。该校核针对规则性质，不构成预测效度证据。",
            "en": "Implement aggregation and rounding with rational arithmetic to avoid floating-point changes to displayed results. Eight tests cover constructed examples, fatal precedence, missing information and input feasibility, with bounds, caps, single-risk fidelity, single-step monotonicity and B-tier ranges checked across all 62,425 feasible formal states. These checks concern rule properties, not predictive validity.",
            "ja": "集約と丸めには有理数演算を用い、浮動小数点誤差による表示結果の変化を防ぎます。8件のテストで構成例、致命条件の優先、欠損情報、入力の実行可能性を確認し、全62,425状態で下界、上限、単一リスクの保持、一段階単調性、Bの段階区間を検証。これは規則の性質に関する検証であり、予測妥当性の証拠ではありません。",
            "ko": "집계와 반올림에 유리수 연산을 사용해 부동소수점 오차가 표시 결과를 바꾸지 않도록 했습니다. 8개 테스트는 구성 사례, 치명 조건 우선, 결측 정보와 입력 가능성을 다루며, 62,425개 전체 가능 상태에서 하한, 상한, 단일 위험 보존, 인접 상태 간 단조성과 B의 등급 구간을 검증합니다. 이는 규칙의 성질 검증이며 예측 타당성의 증거는 아닙니다.",
            "ru": "Агрегирование и округление реализованы рациональной арифметикой, чтобы ошибки плавающей точки не меняли результат. Восемь тестов проверяют построенные примеры, приоритет критических условий, пропуски и допустимость входа. Для всех 62 425 допустимых состояний проверены нижняя и верхняя границы, сохранение единичного риска, монотонность соседних состояний и диапазоны B. Это проверка свойств правил, а не доказательство прогностической валидности."
          }
        }
      ]
    }
  }
];
