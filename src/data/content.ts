export const profile = {
  name: '杜孝文',
  latinName: 'Du Xiaowen',
  headline: '航空航天智能系统｜端侧 AI｜嵌入式与高性能计算',
  intro:
    '上海交通大学航空航天学院信息与控制专业硕士研究生，关注航空航天任务规划、强化学习、端侧 AI 推理与嵌入式系统。',
  email: 'alexdjxyz@gmail.com',
  github: 'https://github.com/Alex129xx'
};

export const education = [
  {
    period: '2024.09—至今',
    school: '上海交通大学｜航空航天学院',
    degree: '硕士（推免）｜信息与控制',
    detail: '方向：智能任务规划、强化学习调度、多智能体协同、空天任务仿真。'
  },
  {
    period: '2020.09—2024.06',
    school: '南京航空航天大学｜航空学院',
    degree: '学士｜飞行器设计与工程',
    detail: '年度“三好学生”、优秀学生奖学金等；多门航空与工程基础课程成绩 90 分以上。'
  }
];

export const experiences = [
  {
    period: '2026.07—2026.08',
    organization: '创通电子股份有限公司',
    role: '边缘智能与嵌入式系统开发实习',
    bullets: [
      '在 Arduino UNO Q / QRB2210 上对比 QNN、OpenCL、MNN 与 Vulkan 后端；同一 MatMul 基准下，Vulkan 延迟约 0.186 ms，相较 PyOpenCL 约 79 ms，加速约 425 倍。',
      '使用 C / GLSL Shader 实现 KWS 专用运行时；V3 完整推理约 0.23 ms，V4 残差 DS-CNN 测试集准确率 91.35%，固定 100 条样本音频上 PC/板端预测 100% 一致。',
      '完成 Yocto 5.4 + Debian 双系统、U-Boot/DTB/rootfs 配对、分区部署与回滚验收；为 STM32U585 建立 Zephyr/west/CMake、SWD/OpenOCD/GDB 调试链路。'
    ]
  },
  {
    period: '2026.06',
    organization: 'IAV 中国',
    role: '智能座舱 Agent 软件仿真实习',
    bullets: [
      '使用 React、TypeScript、FastAPI、WebSocket 和 LangGraph 构建跨场景多轮座舱 Agent 原型，接入高德与 Open-Meteo，打通地点消歧、路线预览、确认导航和模拟行驶闭环。',
      '基于 SQLite Checkpoint 与 LangGraph interrupt/resume 实现会话及待确认动作的持久化恢复；设计独立于 LLM 的 ALLOW / MODIFY / CONFIRM / BLOCK 安全门控，并编写异步测试。'
    ]
  },
  {
    period: '2022.07—2022.08',
    organization: '中国商飞（COMAC）｜上海飞机设计研究院',
    role: '飞机结构强度与试验实习',
    bullets: [
      '围绕 C929 舱门局部结构开展设计与强度分析前处理，梳理结构几何、连接关系和受力路径，使用 HyperMesh 完成有限元模型离散与网格划分。',
      '参与 4 个工况的机械臂辅助载荷试验，配合调整运动与加载位姿，参与试验准备、加载观察和结果记录。'
    ]
  }
];

export const projects = [
  {
    period: '2026.01—2026.07',
    title: '基于 PPO–DQN 的多星目标跟踪与任务调度（毕业设计）',
    role: '算法与仿真开发',
    bullets: [
      '构建“目标状态估计—失锁预判—滚动候选与动作掩码—PPO 调度—DQN 单星姿态执行—测量反馈”的主动接力闭环。',
      '接入 1 s DQN Track / PrePoint 执行器并将带质量测量回灌 KF；25 个单星测试场景平均检测时长 450.4 s、平均视场比例 93.83%，脚本化基线测量覆盖率 89.17%。'
    ]
  },
  {
    period: '2025.07—2026.04',
    title: '大规模星座任务规划与边缘分布式计算',
    role: '算法与系统开发',
    bullets: [
      '基于 Orekit 完成轨道传播预计算与观测窗口生成，设计融合多岛屿演化、自适应交叉变异和局部搜索的集中式遗传规划。',
      '基于 Docker Swarm / RK3588 实现任务分片、分布式预计算和结果汇聚；参与 Kubernetes/KubeSphere 与 NPU 资源注册调度，并完成 ONNX 到 RKNN 的端侧推理转换。'
    ]
  },
  {
    period: '2025.04—2025.06',
    title: '多星目标跟踪与 GPU 并行任务分配',
    role: '异构并行仿真算法负责人',
    bullets: [
      '使用 Numba CUDA 将遗传算法关键算子实现为 GPU 并行内核，采用 CPU 事件驱动重规划与 GPU 并行计算联动单星 DQN。',
      '在 20 星 40 目标算子级基准中，适应度评估与交叉分别加速 692.46×、233.88×；5 个动态场景任务分配耗时为 0.442—0.658 s。'
    ]
  },
  {
    period: '2024.09—2025.04',
    title: '星座任务调度与三维可视化平台',
    role: '软件开发负责人',
    bullets: [
      '设计观测与数传两阶段规划流程，综合可见窗口、指向角、卫星切换与资源约束生成任务计划。',
      '负责 Vue3 / Mars3D / Cesium 前端与 Python 规划模块集成，使用 Node.js / WebSocket 实现任务下发、算法调度、结果回传和三维回放；完成 Docker 封装与部署。'
    ]
  },
  {
    period: '2024.09—2024.11',
    title: '基于深度强化学习的遥感卫星跟踪目标算法',
    role: '算法负责人',
    bullets: [
      '将单星动态目标姿态控制建模为 MDP，设计 7 维姿态状态、19 类离散动作和视场/稳定性奖励函数，集成轨迹预测与姿态仿真闭环。',
      '9 组测试中 DQN 平均成功跟瞄时长 447.1/480 s（93.1%）；稳定性奖励使平均角速度指标由 0.0180 降至 0.0118 rad/s。'
    ]
  },
  {
    period: '2022.03—2023.05',
    title: '超声电机驱动的折叠翼仿生无人机设计',
    role: '团队队长｜总体与气动设计',
    bullets: [
      '完成变体固定翼无人机翼型筛选、机身气动外形与总体布局设计，使用 MATLAB 建立最小转弯半径模型并结合 XFLR5 开展初步气动估算。',
      '统筹内翼变后掠、羽毛式外翼差动折叠和全动尾翼协同设计，协调超声电机—滑杆驱动方案，组织完成 CATIA 结构设计、初步实验模型与技术文档；项目获国家级大学生创新训练项目结题。'
    ]
  }
];

export const competition = {
  period: '2022.09',
  title: '“高教社杯”全国大学生数学建模竞赛｜全国二等奖',
  bullets: [
    '作为团队队长，建立波浪能装置浮子—振子垂荡及垂荡—纵摇耦合动力学模型。',
    '独立完成动力学方程推导、MATLAB/ODE45 时域仿真、阻尼参数网格搜索和论文撰写；联合阻尼模型离散搜索最高平均输出功率 343.21 W。'
  ],
};

export const campus = {
  period: '2021.05—2023.05',
  title: '南京航空航天大学航空学院科学与技术协会｜主席',
  bullets: [
    '创办航空航天科普杂志《航家》。',
    '主导策划哈尔滨飞机工业集团赞助的 2021、2022“哈飞杯”航空航天知识竞赛，组织科创训练营及“试飞院杯”飞行器复原大赛。',
    '带领科协团队获评“年度优秀学生科协”。'
  ]
};

export const skills = [
  'Python', 'C / C++', 'Go', 'MATLAB', 'CUDA / Numba', 'PPO / DQN / A2C',
  'Orekit', 'Docker / Kubernetes', 'RK3588 / NPU', 'Vulkan / GLSL',
  'Linux / U-Boot / Yocto', 'STM32U585 / Zephyr', 'React / TypeScript',
  'FastAPI / WebSocket', 'LangGraph / Agent'
];

export const awards = [
  '2024—2025 学年上海交通大学研究生学业奖学金二等奖',
  '2022 届“高教社杯”全国大学生数学建模竞赛全国二等奖',
  '2022—2023 学年南京航空航天大学学业奖学金二等奖',
  '2021—2022 学年南京航空航天大学优秀学生奖学金三等奖'
];
