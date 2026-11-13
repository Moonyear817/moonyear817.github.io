export const projects = [
  {
    "slug": "rhodes",
    "title": {
      "zh": "罗德岛号",
      "en": "Rhodes Island Landship"
    },
    "description": {
      "zh": "以《明日方舟》罗德岛号为参考的陆行舰复刻，围绕舰体比例、分板、履带与灯具逐步完善细节。展示荒原中的完整舰体、船尾与夜间灯光。",
      "en": "A landship study based on Rhodes Island from Arknights, developed through hull proportions, paneling, tracks and lighting. The gallery presents the ship in a desert setting and at night."
    },
    "credit": {
      "zh": "角色与世界观来自《明日方舟》，模型与画面为同人制作。",
      "en": "Fan work based on the characters and world of Arknights."
    },
    "thumb": "./assets/projects/rhodes-thumb.jpg",
    "gallery": [
      {
        "src": "./assets/projects/rhodes-1.jpg",
        "caption": {
          "zh": "荒原中的罗德岛号",
          "en": "Rhodes Island in the desert"
        }
      },
      {
        "src": "./assets/projects/rhodes-2.jpg",
        "caption": {
          "zh": "船尾与上层结构",
          "en": "Stern and superstructure"
        }
      },
      {
        "src": "./assets/projects/rhodes-3.jpg",
        "caption": {
          "zh": "夜间灯光",
          "en": "Night lighting"
        }
      }
    ],
    "process": {
      "tools": "Blender · Python · Cycles · Godot",
      "steps": [
        {
          "title": {
            "zh": "参考整理与比例校准",
            "en": "References and proportions"
          },
          "body": {
            "zh": "以官方授权成品模型的多角度照片为主要参考，先提取舰体轮廓、甲板层级、烟囱和跑道的位置，再反推照片机位。在相同视角下比较模型与参考，反复校准长度、宽度和上层建筑的高度。",
            "en": "The study starts with multi-angle photographs of the officially licensed scale model. Hull silhouettes, deck levels, chimney and runway positions guide the blockout. Fitted cameras make it possible to compare matching views and refine the ship’s proportions."
          }
        },
        {
          "title": {
            "zh": "从大体块到机械细节",
            "en": "From blockout to mechanical detail"
          },
          "body": {
            "zh": "用 Python 脚本分层搭建主舰体、分板和小构件，逐步加入履带单元、支撑、管线、栏杆和机库。复核承重关系后，将外排履带收回舰体下方，并同步调整支架与沙地车辙的位置。",
            "en": "Python scripts build the hull, panel divisions and smaller components in layers. Tracks, supports, pipes, railings and hangars are added after the large forms. A later review moves the outer tracks beneath the hull and updates the supports and desert track marks."
          },
          "image": {
            "src": "./assets/projects/rhodes-process-tracks.jpg",
            "caption": {
              "zh": "履带位置与支撑关系的修改对照；下方附官方模型参考。",
              "en": "Track-layout revisions, with official scale-model references at the bottom."
            }
          }
        },
        {
          "title": {
            "zh": "舰体材质与灯具重做",
            "en": "Hull materials and lighting"
          },
          "body": {
            "zh": "材质经过多轮调整，逐步加入钢板明暗、焊缝、补漆、锈水和棱边磨损，让表面在光线下显出板块层次。灯光也从简单发光面改为带灯壳、支架和透镜的灯具，再为夜景配置实际光源。",
            "en": "Several material passes introduce plate-to-plate variation, welds, repair paint, rust streaks and edge wear. The changing reflections help describe the hull’s panel structure. Simple emissive patches are developed into modeled fixtures with housings and lenses, then paired with lights for the night views."
          },
          "image": {
            "src": "./assets/projects/rhodes-process-materials.jpg",
            "caption": {
              "zh": "写实化调整前后，比较舰体表面、履带与灯具。",
              "en": "Before-and-after views of the hull surface, tracks and lighting details."
            }
          }
        },
        {
          "title": {
            "zh": "多机位渲染与实时展示",
            "en": "Rendering and real-time presentation"
          },
          "body": {
            "zh": "在荒原、近景与夜景中分别检查整体轮廓、材质和细节，再输出展示图。另将材质烘焙并导出到 Godot，检查实时环境中的比例、贴图和舰体层次。",
            "en": "Desert views, close-ups and night renders check the silhouette, materials and small details at different scales. Baked materials and a Godot export provide a separate real-time view of the model’s proportions and surface treatment."
          }
        }
      ]
    }
  },
  {
    "slug": "t84",
    "title": {
      "zh": "T-84 · 向日葵花海",
      "en": "T-84 · Sunflower Field"
    },
    "description": {
      "zh": "以 BM Oplot 主战坦克为对象，结合实车照片与侧视资料制作外观，并放进向日葵花田场景。蓝天、金黄花田与胶片颗粒共同构成这组画面。",
      "en": "An exterior modeling study of the BM Oplot tank using vehicle photographs and side-view references. A sunflower-field setting combines a blue sky, golden flowers and film grain."
    },
    "credit": {
      "zh": "向日葵素材改编自 soufiane oujihi 的 Sunflower 3D（CC BY）；天空等部分素材来自 Poly Haven（CC0）。",
      "en": "Sunflower asset adapted from Sunflower 3D by soufiane oujihi (CC BY). Sky and selected materials from Poly Haven (CC0)."
    },
    "thumb": "./assets/projects/t84-thumb.jpg",
    "gallery": [
      {
        "src": "./assets/projects/t84-1.jpg",
        "caption": {
          "zh": "向日葵花海 · 主镜头",
          "en": "Sunflower field · main view"
        }
      },
      {
        "src": "./assets/projects/t84-2.jpg",
        "caption": {
          "zh": "沿田间道路的侧面视角",
          "en": "Side view along the field road"
        }
      },
      {
        "src": "./assets/projects/t84-3.jpg",
        "caption": {
          "zh": "车体与炮塔近景",
          "en": "Hull and turret close-up"
        }
      }
    ],
    "process": {
      "tools": "Blender · Python · Cycles",
      "steps": [
        {
          "title": {
            "zh": "重测车体与炮塔比例",
            "en": "Revising the hull and turret"
          },
          "body": {
            "zh": "先用车辆尺寸资料建立模型标尺，再结合实车照片与 War Thunder 的侧视参考，核对炮塔高度、炮轴、侧裙与轮组的位置。初版偏长、偏扁的轮廓经过重做，并通过正交侧视叠图继续检查。",
            "en": "Vehicle dimensions establish the model’s scale. Photographs and a War Thunder side-view reference help check turret height, gun axis, side skirts and wheel positions. The early silhouette is revised and checked again with an orthographic overlay."
          },
          "image": {
            "src": "./assets/projects/t84-process-proportions.jpg",
            "caption": {
              "zh": "早期模型、修改版与游戏参考的比例检查。游戏参考版权归 Gaijin Entertainment。",
              "en": "Proportion checks across early and revised models and a game reference. Game reference © Gaijin Entertainment."
            }
          }
        },
        {
          "title": {
            "zh": "硬表面细化与旧化",
            "en": "Hard-surface detail and weathering"
          },
          "body": {
            "zh": "在大形稳定后加入反应装甲、螺栓、合页、拖曳钢缆和观瞄设备。军绿漆面按构件增加色差，再叠加积灰、泥污、雨水痕与掉漆；扶手、螺栓和装甲棱边增加露钢与高光。",
            "en": "Once the main forms settle, the model gains armor blocks, bolts, hinges, tow cables and optical equipment. Per-part paint variation is combined with dust, mud, rain streaks and chipped edges. Exposed steel and highlights give small fittings more definition."
          }
        },
        {
          "title": {
            "zh": "花田与长焦构图",
            "en": "Sunflower field and camera composition"
          },
          "body": {
            "zh": "主镜头按参考样张选择约 85 mm 的长焦，并抬高田间路基，让车体在花田上方保持可见。向日葵素材调整为多种生长姿态，再用实例化铺成花田，通过株高、朝向与间距变化减少重复感。",
            "en": "An approximately 85 mm lens follows the reference composition. A raised field road keeps the hull visible above the flowers. The sunflower asset is adapted into several growing poses, then instanced with variations in height, orientation and spacing."
          }
        },
        {
          "title": {
            "zh": "天空方案与胶片后期",
            "en": "Sky variations and film treatment"
          },
          "body": {
            "zh": "比较多种天空后，确定蓝天、白云与金黄花田的组合。Cycles 输出多机位 4K 静帧，再加入偏暖的曲线、轻微光晕、暗角和颗粒，同时保留干净版用于观察模型细节。",
            "en": "Several sky treatments lead to the blue-sky, white-cloud and golden-field palette. Multi-angle 4K Cycles renders receive warm tonal curves, subtle halation, vignetting and grain. Clean versions are also retained for inspecting the model."
          },
          "image": {
            "src": "./assets/projects/t84-process-sky.jpg",
            "caption": {
              "zh": "天空与整体色调的前后对照。",
              "en": "Before-and-after comparison of the sky and overall color treatment."
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
    ]
  },
  {
    "slug": "linan",
    "title": {
      "zh": "南宋临安城",
      "en": "Southern Song Lin’an"
    },
    "description": {
      "zh": "参考南宋古地图，并结合现代地形与地理锚点搭建临安城和西湖。通过三维场景与后期合成呈现水墨全景，以及御街、城门和苏堤等局部。复原中的尺度与位置包含解释性取舍。",
      "en": "A reconstruction study of Lin’an and West Lake based on historic maps, modern terrain and geographic anchors. A 3D scene and compositing produce an ink-wash panorama and architectural details, with interpretive choices in scale and placement."
    },
    "credit": {
      "zh": "资料来源包括《咸淳临安志》、G. E. Moule 古城图、Copernicus DEM、OpenStreetMap。",
      "en": "Sources include historic Lin’an maps, G. E. Moule, Copernicus DEM and OpenStreetMap."
    },
    "thumb": "./assets/projects/linan-thumb.jpg",
    "gallery": [
      {
        "src": "./assets/projects/linan-1.jpg",
        "caption": {
          "zh": "临安城与西湖全景",
          "en": "Panorama of Lin’an and West Lake"
        }
      },
      {
        "src": "./assets/projects/linan-2.jpg",
        "caption": {
          "zh": "御街与朝天门",
          "en": "Imperial Street and Chaotian Gate"
        }
      },
      {
        "src": "./assets/projects/linan-3.jpg",
        "caption": {
          "zh": "苏堤六桥",
          "en": "Six bridges of Su Causeway"
        }
      }
    ],
    "process": {
      "tools": "Blender · Python · EEVEE · NumPy",
      "steps": [
        {
          "title": {
            "zh": "古地图与现代地理对齐",
            "en": "Aligning historical maps and geography"
          },
          "body": {
            "zh": "以《咸淳临安志》地图和古城复绘为依据，结合现代遗址位置、Copernicus 高程与 OpenStreetMap 水系道路数据，确定城墙、皇城、御街、河道和西湖之间的布局关系。",
            "en": "Historical Lin’an maps and later redrawings are aligned with surviving sites, Copernicus elevation data and OpenStreetMap waterways and roads. These anchors establish the relationships between the city walls, palace, Imperial Street, canals and West Lake."
          },
          "image": {
            "src": "./assets/projects/linan-process-plan.jpg",
            "caption": {
              "zh": "建模阶段的全域布局俯视图，查看城墙、水系与建筑分布。",
              "en": "Top-down planning view of the walls, waterways and building distribution."
            }
          }
        },
        {
          "title": {
            "zh": "程序化搭建城市",
            "en": "Procedural city construction"
          },
          "body": {
            "zh": "先生成地形和城市规划，再按街区、建筑类型与地势批量布置民居、铺面、寺观和宫殿。城楼、雷峰塔等地标单独处理；民居以程序化示意表达城市密度，并保留历史位置存在分歧时的解释性取舍。",
            "en": "Terrain and a city plan come first, followed by procedural placement of houses, shops, temples and palace buildings. Gates and landmark towers receive individual treatment. Generated housing conveys urban density, while uncertain historic locations remain interpretive choices."
          }
        },
        {
          "title": {
            "zh": "机位与全景可读性",
            "en": "Camera studies and visual readability"
          },
          "body": {
            "zh": "通过高低机位比较城市与西湖的关系，确定斜俯瞰的全景视角。为让远景中的山形、塔和城门清晰可辨，对部分高度和尺度进行有记录的夸张，再为御街、苏堤等区域设置局部镜头。",
            "en": "Camera studies compare how the city and lake read from different heights. An oblique aerial view becomes the panorama. Documented scale exaggerations help mountains, towers and gates remain legible, and separate cameras explore Imperial Street, Su Causeway and other details."
          },
          "image": {
            "src": "./assets/projects/linan-process-camera.jpg",
            "caption": {
              "zh": "前期全景机位方案，比较俯角与城市覆盖范围。",
              "en": "Early panorama camera studies comparing viewing angle and city coverage."
            }
          }
        },
        {
          "title": {
            "zh": "从渲染通道到水墨画面",
            "en": "From render passes to ink wash"
          },
          "body": {
            "zh": "EEVEE 分别输出法线、深度、遮挡、底色与分类遮罩。后期从通道变化提取墨线，叠加墨色分层、皴纹、云雾、岸线和宣纸纹理，并按镜头调整浓淡，最终输出 8K 全景与七处景致特写。",
            "en": "EEVEE provides normal, depth, occlusion, base-color and category-mask passes. Compositing extracts ink edges and combines tonal layers, texture strokes, mist, shorelines and paper texture. Per-camera adjustments produce an 8K panorama and seven detail views."
          }
        }
      ]
    }
  },
  {
    "slug": "night-plaza",
    "title": {
      "zh": "信濃町夜景复刻",
      "en": "Shinanomachi · Night Scene"
    },
    "description": {
      "zh": "以车站口广场的夜景照片为参考，复刻商店灯箱、石墙、台阶、栏杆与路面等环境细节。通过机位匹配、材质与灯光调整，重现照片中偏青的夜景色调。图组包含终稿、整体对照与局部细节。",
      "en": "A night-scene reconstruction based on a photograph of a station plaza, with shop signs, stone walls, stairs, railings and paving. Camera matching, materials and lighting recreate the cool-toned atmosphere. The gallery includes the final render and reference comparisons."
    },
    "credit": {
      "zh": "场景按参考照片搭建，部分材质与道具使用 CC0／公有领域资源，来源包括 ambientCG、Poly Haven。",
      "en": "Reconstructed from a reference photograph, using some CC0 and public-domain materials and props from sources including ambientCG and Poly Haven."
    },
    "thumb": "./assets/projects/night-plaza-thumb.jpg",
    "gallery": [
      {
        "src": "./assets/projects/night-plaza-1.jpg",
        "caption": {
          "zh": "夜景终稿",
          "en": "Final night scene"
        }
      },
      {
        "src": "./assets/projects/night-plaza-2.jpg",
        "caption": {
          "zh": "参考照片与复刻画面对照",
          "en": "Reference photograph and reconstructed scene"
        }
      },
      {
        "src": "./assets/projects/night-plaza-3.jpg",
        "caption": {
          "zh": "六处局部细节对照",
          "en": "Six detail comparisons"
        }
      }
    ],
    "process": {
      "tools": "Blender · Python · Cycles",
      "steps": [
        {
          "title": {
            "zh": "从照片反推相机",
            "en": "Solving the camera from the photograph"
          },
          "body": {
            "zh": "从墙缝、立柱等竖线估计消失点，再利用地面上互相垂直的线反推焦距。确定约 69 mm 的等效焦距和约 9.7 m 的相机高度后，先渲染地面网格与竖杆，叠回参考照片检查透视。",
            "en": "Vertical wall joints and posts help estimate the vanishing point; perpendicular ground lines constrain focal length. An approximately 69 mm equivalent lens and 9.7 m camera height are checked by overlaying a rendered ground grid and vertical markers on the photograph."
          },
          "image": {
            "src": "./assets/projects/night-plaza-process-camera.jpg",
            "caption": {
              "zh": "早期相机核对图，地面网格与竖杆叠在参考照片上。",
              "en": "Early camera check with a ground grid and vertical markers over the reference photograph."
            }
          }
        },
        {
          "title": {
            "zh": "按透视搭建广场",
            "en": "Building the plaza from projected measurements"
          },
          "body": {
            "zh": "在相机固定后反投影照片中的位置，逐步搭建铺装、石墙、台阶、露台、灯箱和栏杆。对照边缘叠图修正墙体朝向、邮筒高度和楼梯外沿，让关键轮廓与参考更接近。",
            "en": "With the camera fixed, back-projected measurements guide the paving, wall, stairs, terrace, signs and railings. Edge overlays reveal adjustments to the wall orientation, postbox height and stair beam, bringing the main outlines closer to the reference."
          }
        },
        {
          "title": {
            "zh": "材质、灯光与暗部层次",
            "en": "Materials, light groups and shadow detail"
          },
          "body": {
            "zh": "铺装、花岗岩、不锈钢和植物结合程序化处理与 CC0 素材完成。将灯箱、店内、地灯和补光分组渲染，按照片分区亮度拟合强度，并分别控制灯箱自身的画面亮度和周围照明。",
            "en": "Procedural work and CC0 assets provide paving, granite, steel and plants. Separate render groups for signs, shop lighting, ground lamps and fill lights are fitted to regional brightness in the photograph. Visible sign brightness and illumination of nearby surfaces are controlled separately."
          },
          "image": {
            "src": "./assets/projects/night-plaza-process-raw.jpg",
            "caption": {
              "zh": "调色前的渲染阶段，用于检查材质与各区域的明暗关系。",
              "en": "Render before final grading, used to inspect materials and regional lighting."
            }
          }
        },
        {
          "title": {
            "zh": "色调匹配与局部复核",
            "en": "Color matching and detail review"
          },
          "body": {
            "zh": "后期拟合逐通道曲线与大尺度明暗，补入灯箱光晕、轻微柔化和颗粒。压暗楼梯与左上背景后，输出 4796×2700 终稿，再用整体并排图和六处局部对照复核；照片中难以辨认的暗部结构采用推测性简化。",
            "en": "Channel curves and broad tonal adjustments establish the final grade, followed by sign glow, mild softening and grain. Darkening the stairs and upper-left background leads to a 4796×2700 final render, reviewed in full-frame and six-detail comparisons. Obscured structures are simplified where the photograph provides limited information."
          }
        }
      ]
    }
  },
  {
    "slug": "yufi",
    "title": {
      "zh": "Yufi · 桌面助手",
      "en": "Yufi · Desktop Assistant"
    },
    "description": {
      "zh": "基于开源 Dela 改造的桌面助手，将 Canvas 课程资料、课堂录音转写、本地项目文件与内置终端放在同一个工作台。源码现已公开。",
      "en": "A desktop assistant adapted from open-source Dela, combining Canvas course materials, lecture recording and transcription, local project files and an integrated terminal. The source is public."
    },
    "repository": "https://github.com/Moonyear817/Yufi",
    "gallery": [],
    "credit": {
      "zh": "基于 Dela 改造，遵循 GPL-3.0-or-later；桌面工作台与 Agent 框架来自原项目。",
      "en": "Adapted from Dela under GPL-3.0-or-later. The desktop workspace and agent framework come from the upstream project."
    },
    "sources": [
      {
        "label": "Dela / upstream",
        "url": "https://github.com/Chang-Yo/Dela"
      }
    ],
    "process": {
      "tools": "Electron · React · TypeScript · Python · sherpa-onnx",
      "steps": [
        {
          "title": {
            "zh": "在现有工作台上改造",
            "en": "Adapting an existing workspace"
          },
          "body": {
            "zh": "沿用 Dela 的 Electron 工作台与 Pi Agent 内核，把重点放在课程资料、课堂记录与本地项目的衔接；隐藏当前环境不使用的课表、课堂视频与社区入口。",
            "en": "Retain Dela’s Electron workspace and Pi agent core, focusing on course materials, lecture notes and local projects. Hide timetable, classroom-video and community entries that do not apply to this setup."
          }
        },
        {
          "title": {
            "zh": "Canvas 会话登录与资料整理",
            "en": "Canvas session login"
          },
          "body": {
            "zh": "通过应用内登录窗口获取会话 Cookie，替代手动填写访问令牌；调整学期名称识别，把课程、课件预览与下载接到工作台。登录与课程同步已做本地验证。",
            "en": "An in-app sign-in window supplies session cookies instead of a manually entered access token. Adapted term-name parsing connects courses, material previews and downloads to the workspace. Sign-in and course sync have been checked locally."
          }
        },
        {
          "title": {
            "zh": "双阶段语音转写与录音回放",
            "en": "Two-stage transcription and playback"
          },
          "body": {
            "zh": "按课程管理录音，以 SenseVoice 输出实时预览，再用 Qwen3-ASR 完成分句转写。修复 Electron 模块加载和 WebM 时长信息，使录音能显示时长并拖动定位；中英文录音与回放已实测。",
            "en": "Organize recordings by course, using SenseVoice for live previews and Qwen3-ASR for finalized sentence transcripts. Fix Electron module loading and WebM duration metadata so audio displays its duration and supports seeking. Chinese and English recordings and playback were tested."
          }
        },
        {
          "title": {
            "zh": "终端适配与当前进度",
            "en": "Terminal fixes and current status"
          },
          "body": {
            "zh": "修复 macOS 内置终端的执行权限与启动提示，保留 Microsoft 365 OAuth 接入代码。邮箱仍需租户管理员授权；AI 整理笔记与远程 SSH 尚待实际验证。本次公开开发源码，暂未提供 Yufi 安装包。",
            "en": "Fix macOS terminal helper permissions and startup messages, and retain Microsoft 365 OAuth integration. Mail still requires tenant administrator approval; AI note organization and remote SSH remain unverified in this adaptation. This publication provides source code, with no Yufi installer yet."
          }
        }
      ]
    }
  },
  {
    "slug": "wandan-index",
    "title": {
      "zh": "完蛋指数 · 方法与计算",
      "en": "Wandan Index · Methods & Calculation"
    },
    "description": {
      "zh": "围绕“经营能力已经受损到什么程度”构建的试行评估框架。公开版包含六系统判据、方案 A/B 对照、未知区间、模拟算例与 Python 精确计算器。",
      "en": "An experimental framework for describing impairment of operating capacity. The public edition includes six-system criteria, A/B rules, uncertainty ranges, constructed examples and an exact Python calculator."
    },
    "repository": "https://github.com/Moonyear817/wandan-index",
    "gallery": [],
    "credit": {
      "zh": "研究中的方法原型，尚未完成多案例实证验证。分数描述当前状态，不表示倒闭概率。公开算例为构造数据。",
      "en": "A research prototype without multi-case empirical validation. Scores describe current states, not failure probabilities. Public examples are constructed."
    },
    "sources": [
      {
        "label": "方法说明 / Methods",
        "url": "https://github.com/Moonyear817/wandan-index/blob/main/docs/method.md"
      }
    ],
    "process": {
      "tools": "Python · Fraction · LaTeX · Formal enumeration",
      "steps": [
        {
          "title": {
            "zh": "先明确分数回答的问题",
            "en": "Define the question"
          },
          "body": {
            "zh": "将目标限定为固定对象、时点和证据范围下的经营能力受损状态，分别记录现金、业务与收入、交付、团队、治理、必要经营条件。先核对事实，再给出档位。",
            "en": "Define impairment for a fixed organization, time and evidence scope. Assess cash, business and revenue, delivery, team, governance and necessary operating conditions. Review facts before assigning grades."
          }
        },
        {
          "title": {
            "zh": "把致命与未知单独处理",
            "en": "Separate fatal and unknown states"
          },
          "body": {
            "zh": "已核实致命条件直接为 100；致命未知或材料未复核时待补证。致命已排除、仅有部分档位或作用链未定时，枚举可行补全并输出区间，避免把未知填成零。",
            "en": "Verified fatal conditions produce 100; unknown fatal status or unreviewed evidence remains pending. When fatal conditions are excluded but some grades or chains are missing, enumerate feasible completions to report a range."
          }
        },
        {
          "title": {
            "zh": "比较两种排序方案",
            "en": "Compare two ordering rules"
          },
          "body": {
            "zh": "方案 A 允许风险叠加升档；当前推荐的方案 B 将叠加限制在最高档区间内，保留最高档优先。文档同时写清两者的代价，并用相同输入展示不同结果。",
            "en": "A allows stacked risks to cross tiers. The currently preferred B keeps stacking within the highest-risk tier, preserving tier priority. Documents explain each trade-off and compare both rules on identical inputs."
          }
        },
        {
          "title": {
            "zh": "做成可复算的公开版",
            "en": "Build a reproducible public edition"
          },
          "body": {
            "zh": "从已有书稿、数学工作稿和脚本整理出方法说明、分档判据、模板与模拟算例，加入有理数计算器；8 项测试通过，覆盖 62,425 个可行形式状态的基本性质与单步单调性。形式校核不代表实证预测有效。",
            "en": "Organize the existing manuscripts and scripts into methods, criteria, templates and constructed examples, adding an exact rational calculator. Eight tests pass, including basic properties and single-step monotonicity across 62,425 feasible formal states. Formal checks do not establish empirical predictive validity."
          }
        }
      ]
    }
  }
];
