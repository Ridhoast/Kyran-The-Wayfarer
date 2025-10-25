class BusinessQuestRPG {
  constructor() {
    this.gameData = {
      name: "",
      role: "",
      xp: 0,
      level: 1,
      completedQuests: [],
      unlockedSkills: [],
      skillPoints: 0,
      stats: {
        business: 1,
        leadership: 1,
        innovation: 1,
        influence: 1,
      },
      gold: 1000,
      reputation: 0,
      achievements: [],
    };

    this.questChains = {
      startupJourney: {
        name: "Perjalanan Startup",
        description:
          "Memulai perjalanan sebagai pengusaha startup dengan menyusun Business Model Canvas",
        chainProgress: 0,
        requiredLevel: 1,
        status: "unlocked",
        quests: [
          {
            id: "business_canvas_1",
            title: "Business Model Canvas - Customer Segments",
            description:
              "Pelajari dan susun bagian Customer Segments dalam Business Model Canvas",
            type: "minigame",
            minigameType: "businessCanvas",
            xpReward: 100,
            goldReward: 500,
            category: "strategy",
          },
          {
            id: "business_canvas_2",
            title: "Business Model Canvas - Value Propositions",
            description:
              "Definisikan Value Propositions yang tepat untuk customer segments Anda",
            type: "minigame",
            minigameType: "businessCanvas",
            xpReward: 150,
            goldReward: 750,
            category: "marketing",
          },
          {
            id: "business_canvas_3",
            title: "Business Model Canvas - Revenue Streams",
            description:
              "Identifikasi sumber pendapatan potensial dari bisnis Anda",
            type: "minigame",
            minigameType: "businessCanvas",
            xpReward: 200,
            goldReward: 1000,
            category: "finance",
          },
        ],
        rewards: {
          gold: 2000,
          reputation: 50,
          stats: {
            business: 2,
            leadership: 1,
          },
        },
      },
      pitchDeck: {
        name: "Pitch Deck Preparation",
        description: "Coming Soon",
        chainProgress: 0,
        requiredLevel: 1,
        status: "unlocked",
        quests: [
          {
            id: "pitch_deck_1",
            title: "Pitch Deck - Problem & Solution",
            description: "Susun slide Problem dan Solution yang meyakinkan",
            type: "minigame",
            minigameType: "pitchDeck",
            xpReward: 150,
            goldReward: 800,
            category: "strategy",
          },
          {
            id: "pitch_deck_2",
            title: "Pitch Deck - Market Size & Business Model",
            description: "Analisis TAM, SAM, SOM dan model bisnis Anda",
            type: "minigame",
            minigameType: "pitchDeck",
            xpReward: 200,
            goldReward: 1000,
            category: "marketing",
          },
        ],
        rewards: {
          gold: 2500,
          reputation: 75,
          stats: {
            influence: 2,
            innovation: 1,
          },
        },
      },
      marketResearch: {
        name: "Market Research & Analysis",
        description: "Coming Soon",
        chainProgress: 0,
        requiredLevel: 2,
        status: "unlocked",
        quests: [
          {
            id: "market_research_1",
            title: "Competitor Analysis",
            description: "Identifikasi dan analisis kompetitor utama di pasar",
            type: "minigame",
            minigameType: "marketResearch",
            xpReward: 200,
            goldReward: 1000,
            category: "marketing",
          },
          {
            id: "market_simulation_1",
            title: "Market Share Simulation",
            description: "Simulasikan strategi untuk meningkatkan market share",
            type: "minigame",
            minigameType: "marketSimulation",
            xpReward: 250,
            goldReward: 1200,
            category: "strategy",
          },
        ],
        rewards: {
          gold: 3000,
          reputation: 100,
          stats: {
            business: 2,
            innovation: 2,
          },
        },
      },
      businessStrategy: {
        name: "Business Strategy",
        description: "Coming Soon",
        chainProgress: 0,
        requiredLevel: 2,
        status: "unlocked",
        quests: [
          {
            id: "strategy_planning_1",
            title: "Strategic Planning",
            description: "Susun rencana strategis jangka panjang",
            type: "minigame",
            minigameType: "strategyPlanning",
            xpReward: 300,
            goldReward: 1500,
            category: "strategy",
          },
          {
            id: "market_battle_1",
            title: "Market Battle Simulation",
            description: "Simulasi persaingan pasar dengan kompetitor",
            type: "minigame",
            minigameType: "marketBattle",
            xpReward: 350,
            goldReward: 1800,
            category: "strategy",
          },
        ],
        rewards: {
          gold: 4000,
          reputation: 150,
          stats: {
            leadership: 2,
            influence: 2,
          },
        },
      },
    };

    this.questPool = [
      {
        id: "startup_1",
        title: "Business Model Creation",
        description: "Buat model bisnis untuk startup Anda",
        category: "strategy",
        chainId: "startupJourney",
        chainStep: 1,
        xp: 30,
        gold: 500,
        taskType: "minigame",
        task: {
          type: "business_canvas",
          question: "Susun Business Model Canvas yang tepat",
          components: [
            "Value Proposition",
            "Customer Segments",
            "Revenue Streams",
            "Cost Structure",
          ],
          time: 120,
        },
      },
      {
        id: "startup_2",
        title: "Initial Funding",
        description: "Dapatkan pendanaan awal untuk startup",
        category: "finance",
        chainId: "startupJourney",
        chainStep: 2,
        xp: 40,
        gold: 700,
        taskType: "minigame",
        task: {
          type: "pitch_deck",
          question: "Buat pitch deck yang menarik investor",
          slides: ["Problem", "Solution", "Market Size", "Business Model"],
          time: 180,
        },
      },
      {
        id: "startup_3",
        title: "Market Launch",
        description: "Luncurkan produk ke pasar",
        category: "marketing",
        chainId: "startupJourney",
        chainStep: 3,
        xp: 50,
        gold: 800,
        taskType: "minigame",
        task: {
          type: "market_simulation",
          question: "Kelola launch campaign dengan budget terbatas",
          budget: 10000,
          channels: ["Social Media", "PR", "Influencer", "Events"],
          time: 240,
        },
      },
      {
        id: "market_1",
        title: "Competitor Analysis",
        description: "Analisis kompetitor utama di pasar",
        category: "strategy",
        chainId: "marketDomination",
        chainStep: 1,
        xp: 45,
        gold: 600,
        taskType: "minigame",
        task: {
          type: "market_research",
          question: "Lakukan riset kompetitor",
          competitors: ["Comp A", "Comp B", "Comp C"],
          aspects: ["Price", "Features", "Market Share", "Growth"],
          time: 180,
        },
      },
      {
        id: "market_2",
        title: "Growth Strategy",
        description: "Kembangkan strategi pertumbuhan agresif",
        category: "strategy",
        chainId: "marketDomination",
        chainStep: 2,
        xp: 55,
        gold: 800,
        taskType: "minigame",
        task: {
          type: "strategy_planning",
          question: "Rencanakan strategi ekspansi",
          areas: ["Geographic", "Product Line", "Market Segment", "Channels"],
          time: 240,
        },
      },
      {
        id: "market_3",
        title: "Market Leadership",
        description: "Capai posisi market leader",
        category: "marketing",
        chainId: "marketDomination",
        chainStep: 3,
        xp: 70,
        gold: 1000,
        taskType: "minigame",
        task: {
          type: "market_battle",
          question: "Rebut pangsa pasar dari kompetitor",
          marketSize: 100,
          initialShare: 30,
          targetShare: 50,
          time: 300,
        },
      },
      {
        id: "finance_1",
        title: "Budget Allocation",
        description: "Alokasikan budget 100% untuk berbagai departemen",
        category: "finance",
        xp: 25,
        taskType: "budget",
        task: {
          question:
            "Alokasikan budget 100% untuk: Marketing, Operations, R&D, Admin",
          fields: ["Marketing", "Operations", "R&D", "Admin"],
          target: 100,
        },
      },
      {
        id: "finance_2",
        title: "Profit Margin Calculator",
        description: "Hitung margin keuntungan dari data penjualan",
        category: "finance",
        xp: 30,
        taskType: "calculation",
        task: {
          question:
            "Harga jual: Rp 150.000, Harga beli: Rp 90.000. Berapa margin keuntungan (%)?",
          answer: 40,
        },
      },
      {
        id: "finance_3",
        title: "Investment Strategy",
        description: "Pilih strategi investasi terbaik untuk startup",
        category: "finance",
        xp: 35,
        taskType: "multiple_choice",
        task: {
          question: "Strategi investasi terbaik untuk startup tahap awal?",
          options: [
            "Investasi semua dana ke marketing",
            "Diversifikasi: 60% produk, 30% marketing, 10% cadangan",
            "Simpan semua dana untuk masa depan",
            "Investasi hanya ke teknologi",
          ],
          correct: 1,
        },
      },
      {
        id: "marketing_1",
        title: "Customer Segmentation",
        description: "Urutkan prioritas segmen pelanggan",
        category: "marketing",
        xp: 25,
        taskType: "drag_drop",
        task: {
          question:
            "Urutkan segmen pelanggan berdasarkan prioritas (1=tertinggi)",
          items: [
            "High-value customers",
            "New prospects",
            "Loyal customers",
            "Price-sensitive customers",
          ],
          correct: [
            "Loyal customers",
            "High-value customers",
            "New prospects",
            "Price-sensitive customers",
          ],
        },
      },
      {
        id: "marketing_2",
        title: "Social Media ROI",
        description: "Hitung ROI dari kampanye social media",
        category: "marketing",
        xp: 30,
        taskType: "calculation",
        task: {
          question:
            "Budget kampanye: Rp 5.000.000, Revenue: Rp 15.000.000. Berapa ROI (%)?",
          answer: 200,
        },
      },
      {
        id: "marketing_3",
        title: "Content Strategy",
        description: "Pilih strategi konten yang paling efektif",
        category: "marketing",
        xp: 35,
        taskType: "multiple_choice",
        task: {
          question: "Strategi konten terbaik untuk meningkatkan engagement?",
          options: [
            "Posting produk setiap hari",
            "Mix: 40% educational, 30% entertainment, 20% promotional, 10% user-generated",
            "Hanya konten promotional",
            "Copy konten kompetitor",
          ],
          correct: 1,
        },
      },
      {
        id: "strategy_1",
        title: "SWOT Analysis",
        description: "Lengkapi analisis SWOT untuk bisnis",
        category: "strategy",
        xp: 40,
        taskType: "checklist",
        task: {
          question: "Checklist komponen SWOT Analysis yang harus dianalisis:",
          items: [
            "Strengths (Kekuatan internal)",
            "Weaknesses (Kelemahan internal)",
            "Opportunities (Peluang eksternal)",
            "Threats (Ancaman eksternal)",
            "Competitive analysis",
            "Market trends",
          ],
        },
      },
      {
        id: "strategy_2",
        title: "Market Entry Strategy",
        description: "Pilih strategi masuk pasar yang tepat",
        category: "strategy",
        xp: 35,
        taskType: "multiple_choice",
        task: {
          question:
            "Strategi terbaik untuk masuk pasar baru dengan budget terbatas?",
          options: [
            "Langsung buka cabang di semua kota",
            "Test market di 1-2 area, evaluasi, lalu expand",
            "Investasi besar-besaran untuk dominasi cepat",
            "Tunggu kompetitor masuk dulu",
          ],
          correct: 1,
        },
      },
      {
        id: "strategy_3",
        title: "Business Model Canvas",
        description: "Hitung break-even point bisnis",
        category: "strategy",
        xp: 45,
        taskType: "calculation",
        task: {
          question:
            "Fixed cost: Rp 10.000.000/bulan, Variable cost per unit: Rp 50.000, Harga jual: Rp 100.000. Berapa unit break-even?",
          answer: 200,
        },
      },
      {
        id: "operations_1",
        title: "Process Optimization",
        description: "Urutkan langkah-langkah proses produksi",
        category: "operations",
        xp: 30,
        taskType: "drag_drop",
        task: {
          question: "Urutkan proses produksi yang benar:",
          items: [
            "Quality Control",
            "Raw Material Procurement",
            "Production",
            "Packaging",
            "Distribution",
          ],
          correct: [
            "Raw Material Procurement",
            "Production",
            "Quality Control",
            "Packaging",
            "Distribution",
          ],
        },
      },
      {
        id: "operations_2",
        title: "Inventory Management",
        description: "Hitung Economic Order Quantity (EOQ)",
        category: "operations",
        xp: 35,
        taskType: "calculation",
        task: {
          question:
            "Annual demand: 1200 unit, Order cost: Rp 100.000, Holding cost: Rp 50.000/unit/tahun. EOQ = √(2×D×S/H). Berapa EOQ?",
          answer: 69,
        },
      },
      {
        id: "operations_3",
        title: "Quality Management",
        description: "Checklist sistem quality management",
        category: "operations",
        xp: 25,
        taskType: "checklist",
        task: {
          question: "Komponen Quality Management System yang harus ada:",
          items: [
            "Standard Operating Procedures (SOP)",
            "Quality Control checkpoints",
            "Customer feedback system",
            "Continuous improvement process",
            "Staff training program",
          ],
        },
      },
    ];

    this.skillTree = {
      finance: [
        {
          id: "finance_1",
          name: "Budget Master",
          effect: "+15% XP Finance Quest",
          cost: 1,
        },
        {
          id: "finance_2",
          name: "Profit Optimizer",
          effect: "+10% XP All Quest",
          cost: 2,
        },
        {
          id: "finance_3",
          name: "Investment Guru",
          effect: "+25% XP Finance Quest",
          cost: 3,
        },
      ],
      marketing: [
        {
          id: "marketing_1",
          name: "Brand Builder",
          effect: "+15% XP Marketing Quest",
          cost: 1,
        },
        {
          id: "marketing_2",
          name: "Growth Hacker",
          effect: "+20% XP Marketing Quest",
          cost: 2,
        },
        {
          id: "marketing_3",
          name: "Customer Whisperer",
          effect: "+10% XP All Quest",
          cost: 3,
        },
      ],
      strategy: [
        {
          id: "strategy_1",
          name: "Strategic Thinker",
          effect: "+15% XP Strategy Quest",
          cost: 1,
        },
        {
          id: "strategy_2",
          name: "Market Analyst",
          effect: "+20% XP Strategy Quest",
          cost: 2,
        },
        {
          id: "strategy_3",
          name: "Visionary Leader",
          effect: "+15% XP All Quest",
          cost: 3,
        },
      ],
      operations: [
        {
          id: "operations_1",
          name: "Process Expert",
          effect: "+15% XP Operations Quest",
          cost: 1,
        },
        {
          id: "operations_2",
          name: "Efficiency Master",
          effect: "+20% XP Operations Quest",
          cost: 2,
        },
        {
          id: "operations_3",
          name: "Quality Champion",
          effect: "+10% XP All Quest",
          cost: 3,
        },
      ],
    };

    this.currentQuests = [];
    this.currentQuestData = null;
    this.minigameTimerId = null;
    this.minigameScore = 0;
    this.init();
  }

  init() {
    this.loadGameData();
    this.setupEventListeners();

    const dashboardEl = document.getElementById("dashboard");
    const landingEl = document.getElementById("landing");
    const siteIntro = document.getElementById("siteIntro");

    if (dashboardEl) {
      if (!this.gameData.name) {
        window.location.href = "index.html";
        return;
      }

      this.updateUI();
      this.generateQuests();
      this.renderSkillTree();
      this.renderQuestChains();
    } else {
      if (this.gameData.name) {
        window.location.href = "dashboard.html";
        return;
      }

      if (siteIntro) {
        siteIntro.classList.remove("hidden");
        if (landingEl) landingEl.classList.add("hidden");
      } else {
        if (landingEl) landingEl.classList.remove("hidden");
      }
    }

    const openProfileBtn = document.getElementById("openProfile");
    const closeProfileBtn = document.getElementById("closeProfile");
    const profileModal = document.getElementById("profileModal");
    if (openProfileBtn && profileModal) {
      openProfileBtn.addEventListener("click", () => {
        profileModal.classList.remove("hidden");
      });
    }
    if (closeProfileBtn && profileModal) {
      closeProfileBtn.addEventListener("click", () => {
        profileModal.classList.add("hidden");
      });
    }
  }

  setupEventListeners() {
    const startQuestBtn = document.getElementById("startQuest");
    if (startQuestBtn)
      startQuestBtn.addEventListener("click", () => this.startGame());

    const resetBtn = document.getElementById("resetGame");
    if (resetBtn) resetBtn.addEventListener("click", () => this.resetGame());
    const enterBtn = document.getElementById("enterSite");
    if (enterBtn) {
      enterBtn.addEventListener("click", () => {
        const si = document.getElementById("siteIntro");
        const ld = document.getElementById("landing");
        if (si) si.classList.add("hidden");
        if (ld) ld.classList.remove("hidden");
      });
    }

    const skipBtn = document.getElementById("skipIntro");
    if (skipBtn) {
      skipBtn.addEventListener("click", () => {
        const si = document.getElementById("siteIntro");
        const ld = document.getElementById("landing");
        if (si) si.classList.add("hidden");
        if (ld) ld.classList.remove("hidden");
      });
    }
    document.querySelectorAll(".close-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        if (this.minigameTimerId) {
          clearInterval(this.minigameTimerId);
          this.minigameTimerId = null;
        }

        const qm = document.getElementById("questModal");
        const mm = document.getElementById("minigameModal");
        if (qm) qm.classList.add("hidden");
        if (mm) mm.classList.add("hidden");

        const startBtn = document.getElementById("startMinigame");
        if (startBtn) startBtn.style.display = "block";
      });
    });
    const submitAnswerBtn = document.getElementById("submitAnswer");
    if (submitAnswerBtn)
      submitAnswerBtn.addEventListener("click", () => this.submitAnswer());
    const submitMiniBtn = document.getElementById("submitMinigame");
    if (submitMiniBtn)
      submitMiniBtn.addEventListener("click", () => this.submitMinigame());

    const completeMiniBtn = document.getElementById("completeMinigame");
    if (completeMiniBtn)
      completeMiniBtn.addEventListener("click", () => this.completeQuest());

    const completeQuestBtn = document.getElementById("completeQuest");
    if (completeQuestBtn)
      completeQuestBtn.addEventListener("click", () => this.completeQuest());

    const continueBtn = document.getElementById("continuePlaying");
    if (continueBtn)
      continueBtn.addEventListener("click", () => this.closeLevelUpModal());

    const startMinigameBtn = document.getElementById("startMinigame");
    if (startMinigameBtn)
      startMinigameBtn.addEventListener("click", () => this.startMinigame());

    const playerNameEl = document.getElementById("playerName");
    if (playerNameEl)
      playerNameEl.addEventListener("input", () => this.validateForm());
    const playerRoleEl = document.getElementById("playerRole");
    if (playerRoleEl)
      playerRoleEl.addEventListener("change", () => this.validateForm());

    document.querySelectorAll(".quest-tab").forEach((tab) => {
      tab.addEventListener("click", (e) => {
        document
          .querySelectorAll(".quest-tab")
          .forEach((t) => t.classList.remove("active"));
        e.target.classList.add("active");

        const tabType = e.target.dataset.tab;
        if (tabType === "chains") {
          const ql = document.getElementById("questList");
          const qcl = document.getElementById("questChainList");
          if (ql) ql.classList.add("hidden");
          if (qcl) qcl.classList.remove("hidden");
          this.renderQuestChains();
        } else {
          const ql = document.getElementById("questList");
          const qcl = document.getElementById("questChainList");
          if (ql) ql.classList.remove("hidden");
          if (qcl) qcl.classList.add("hidden");
          this.renderQuests();
        }
      });
    });
  }

  validateForm() {
    const nameEl = document.getElementById("playerName");
    const roleEl = document.getElementById("playerRole");
    const startBtn = document.getElementById("startQuest");
    if (!startBtn) return;
    const name = nameEl ? nameEl.value.trim() : "";
    const role = roleEl ? roleEl.value : "";
    startBtn.disabled = !name || !role;
  }

  startGame() {
    const nameEl = document.getElementById("playerName");
    const roleEl = document.getElementById("playerRole");
    if (!nameEl || !roleEl) return;
    const name = nameEl.value.trim();
    const role = roleEl.value;
    if (!name || !role) return;

    this.gameData.name = name;
    this.gameData.role = role;

    switch (role) {
      case "Merchant":
        this.gameData.stats.business += 2;
        this.gameData.gold += 500;
        this.gameData.stats.influence += 1;
        break;
      case "Strategist":
        this.gameData.stats.leadership += 2;
        this.gameData.stats.innovation += 1;
        this.gameData.reputation += 10;
        break;
      case "Marketer":
        this.gameData.stats.influence += 2;
        this.gameData.stats.innovation += 1;
        this.gameData.gold += 250;
        break;
    }

    this.saveGameData();
    window.location.href = "dashboard.html";
  }

  showLanding() {
    const landing = document.getElementById("landing");
    const dashboard = document.getElementById("dashboard");
    if (landing) landing.classList.remove("hidden");
    if (dashboard) dashboard.classList.add("hidden");
  }

  showDashboard() {
    const landing = document.getElementById("landing");
    const dashboard = document.getElementById("dashboard");
    if (!dashboard) {
      window.location.href = "dashboard.html";
      return;
    }

    if (landing) landing.classList.add("fade-out");
    setTimeout(() => {
      if (landing) landing.classList.add("hidden");
      dashboard.classList.remove("hidden");
      this.updateUI();
      this.generateQuests();
      this.renderSkillTree();
    }, 800);
  }

  generateQuests() {
    const shuffled = [...this.questPool].sort(() => Math.random() - 0.5);
    this.currentQuests = shuffled.slice(0, 6);
    this.renderQuests();
  }

  loadNextQuests() {
    const remaining = this.questPool.filter(
      (q) => !this.gameData.completedQuests.includes(q.id)
    );

    if (remaining.length === 0) {
      this.currentQuests = [];
      this.renderQuests();
      this.showNotification(
        "Selamat! Semua quest telah diselesaikan.",
        "success"
      );
      return;
    }

    const shuffled = [...remaining].sort(() => Math.random() - 0.5);
    this.currentQuests = shuffled.slice(0, 6);
    this.renderQuests();
  }

  renderQuests() {
    const questList = document.getElementById("questList");
    questList.innerHTML = "";

    this.currentQuests.forEach((quest) => {
      const isCompleted = this.gameData.completedQuests.includes(quest.id);
      const questElement = document.createElement("div");
      questElement.className = `quest-item ${isCompleted ? "completed" : ""}`;
      questElement.innerHTML = `
                <div class="quest-header">
                    <div class="quest-title">${quest.title}</div>
                    <div class="quest-category ${
                      quest.category
                    }">${quest.category.toUpperCase()}</div>
                </div>
                <div class="quest-description">${quest.description}</div>
                <div class="quest-reward">Reward: ${quest.xp} XP</div>
            `;

      if (!isCompleted) {
        questElement.addEventListener("click", () => this.openQuest(quest));
      }

      questList.appendChild(questElement);
    });
  }

  openQuest(quest) {
    this.currentQuestData = quest;

    if (quest.taskType === "minigame") {
      document.getElementById("minigameModal").classList.remove("hidden");
      document.getElementById("minigameTitle").textContent = quest.title;
      document.getElementById("minigameDescription").textContent =
        quest.description;
      document.getElementById("gameTimer").textContent = quest.task.time;
      document.getElementById("gameScore").textContent = "0";
      document.getElementById("startMinigame").style.display = "block";
      document.getElementById("minigameArea").innerHTML = "";
      return;
    }

    document.getElementById("questTitle").textContent = quest.title;
    document.getElementById("questDescription").textContent = quest.description;
    const taskContainer = document.getElementById("questTask");
    taskContainer.innerHTML = "";

    this.renderQuestTask(quest.task, quest.taskType, taskContainer);

    const submitBtn = document.getElementById("submitAnswer");
    const completeBtn = document.getElementById("completeQuest");

    submitBtn.classList.remove("hidden");
    submitBtn.disabled = true;

    completeBtn.classList.add("hidden");

    document.getElementById("questModal").classList.remove("hidden");
  }

  renderQuestTask(task, taskType, container) {
    switch (taskType) {
      case "budget":
        this.renderBudgetTask(task, container);
        break;
      case "calculation":
        this.renderCalculationTask(task, container);
        break;
      case "multiple_choice":
        this.renderMultipleChoiceTask(task, container);
        break;
      case "drag_drop":
        this.renderDragDropTask(task, container);
        break;
      case "checklist":
        this.renderChecklistTask(task, container);
        break;
    }
  }

  renderBudgetTask(task, container) {
    container.innerHTML = `
            <p><strong>${task.question}</strong></p>
            <div class="budget-inputs">
                ${task.fields
                  .map(
                    (field) => `
                    <div style="margin-bottom: 1rem;">
                        <label>${field}:</label>
                        <input type="number" class="task-input budget-input" data-field="${field}" min="0" max="100" placeholder="0">
                        <span>%</span>
                    </div>
                `
                  )
                  .join("")}
            </div>
            <div id="budgetTotal" style="font-weight: bold; margin-top: 1rem;">Total: 0%</div>
        `;

    const inputs = container.querySelectorAll(".budget-input");
    inputs.forEach((input) => {
      input.addEventListener("input", () => this.updateBudgetTotal());
    });
  }

  updateBudgetTotal() {
    const inputs = document.querySelectorAll(".budget-input");
    let total = 0;
    inputs.forEach((input) => {
      total += parseFloat(input.value) || 0;
    });

    document.getElementById("budgetTotal").textContent = `Total: ${total}%`;
    document.getElementById("budgetTotal").style.color =
      total === 100 ? "#22c55e" : "#ffffff";
    document.getElementById("submitAnswer").disabled = total !== 100;
  }

  renderCalculationTask(task, container) {
    container.innerHTML = `
            <p><strong>${task.question}</strong></p>
            <input type="number" class="task-input calculation-input" placeholder="Masukkan jawaban">
        `;

    const input = container.querySelector(".calculation-input");
    input.addEventListener("input", () => {
      document.getElementById("submitAnswer").disabled = !input.value;
    });
  }

  renderMultipleChoiceTask(task, container) {
    container.innerHTML = `
            <p><strong>${task.question}</strong></p>
            <div class="task-options">
                ${task.options
                  .map(
                    (option, index) => `
                    <div class="task-option" data-index="${index}">${option}</div>
                `
                  )
                  .join("")}
            </div>
        `;

    const options = container.querySelectorAll(".task-option");
    options.forEach((option) => {
      option.addEventListener("click", () => {
        options.forEach((opt) => opt.classList.remove("selected"));
        option.classList.add("selected");
        document.getElementById("submitAnswer").disabled = false;
      });
    });
  }

  renderDragDropTask(task, container) {
    container.innerHTML = `
            <p><strong>${task.question}</strong></p>
            <div class="drag-drop-area" id="dragDropArea">
                ${task.items
                  .map(
                    (item) => `
                    <div class="draggable-item" draggable="true" data-item="${item}">${item}</div>
                `
                  )
                  .join("")}
            </div>
        `;

    this.setupDragDrop();
  }

  setupDragDrop() {
    const items = document.querySelectorAll(".draggable-item");
    const container = document.getElementById("dragDropArea");

    items.forEach((item) => {
      item.addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("text/plain", e.target.dataset.item);
        e.target.style.opacity = "0.5";
      });

      item.addEventListener("dragend", (e) => {
        e.target.style.opacity = "1";
        document.getElementById("submitAnswer").disabled = false;
      });
    });

    container.addEventListener("dragover", (e) => {
      e.preventDefault();
    });

    container.addEventListener("drop", (e) => {
      e.preventDefault();
      const draggedItem = e.dataTransfer.getData("text/plain");
      const draggedElement = document.querySelector(
        `[data-item="${draggedItem}"]`
      );
      const afterElement = this.getDragAfterElement(container, e.clientY);

      if (afterElement == null) {
        container.appendChild(draggedElement);
      } else {
        container.insertBefore(draggedElement, afterElement);
      }
    });
  }

  getDragAfterElement(container, y) {
    const draggableElements = [
      ...container.querySelectorAll(".draggable-item:not(.dragging)"),
    ];

    return draggableElements.reduce(
      (closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;

        if (offset < 0 && offset > closest.offset) {
          return { offset: offset, element: child };
        } else {
          return closest;
        }
      },
      { offset: Number.NEGATIVE_INFINITY }
    ).element;
  }

  renderChecklistTask(task, container) {
    container.innerHTML = `
            <p><strong>${task.question}</strong></p>
            <div class="checklist-items">
                ${task.items
                  .map(
                    (item, index) => `
                    <div class="checklist-item">
                        <input type="checkbox" id="check_${index}" class="checklist-checkbox">
                        <label for="check_${index}">${item}</label>
                    </div>
                `
                  )
                  .join("")}
            </div>
        `;

    const checkboxes = container.querySelectorAll(".checklist-checkbox");
    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener("change", () => {
        const allChecked = [...checkboxes].every((cb) => cb.checked);
        document.getElementById("submitAnswer").disabled = !allChecked;
      });
    });
  }

  submitAnswer() {
    const quest = this.currentQuestData;
    let isCorrect = false;

    switch (quest.taskType) {
      case "budget":
        const budgetInputs = document.querySelectorAll(".budget-input");
        let total = 0;
        budgetInputs.forEach(
          (input) => (total += parseFloat(input.value) || 0)
        );
        isCorrect = total === quest.task.target;
        break;

      case "calculation":
        const calcInput = document.querySelector(".calculation-input");
        const answer = parseFloat(calcInput.value);
        const tolerance = Math.abs(quest.task.answer * 0.05);
        isCorrect = Math.abs(answer - quest.task.answer) <= tolerance;
        break;

      case "multiple_choice":
        const selectedOption = document.querySelector(".task-option.selected");
        if (selectedOption) {
          isCorrect =
            parseInt(selectedOption.dataset.index) === quest.task.correct;
        }
        break;

      case "drag_drop":
        const dragItems = [...document.querySelectorAll(".draggable-item")];
        const currentOrder = dragItems.map((item) => item.dataset.item);
        isCorrect =
          JSON.stringify(currentOrder) === JSON.stringify(quest.task.correct);
        break;

      case "checklist":
        const checkboxes = document.querySelectorAll(".checklist-checkbox");
        isCorrect = [...checkboxes].every((cb) => cb.checked);
        break;
    }

    if (isCorrect) {
      const submitBtn = document.getElementById("submitAnswer");
      const completeBtn = document.getElementById("completeQuest");

      if (submitBtn) {
        submitBtn.classList.add("hidden");
        submitBtn.disabled = true;
      }
      if (completeBtn) {
        completeBtn.classList.remove("hidden");
        completeBtn.disabled = false;
      }
      this.showNotification(
        "Jawaban benar! Klik Complete Quest untuk mendapatkan XP.",
        "success"
      );
    } else {
      const submitBtn = document.getElementById("submitAnswer");
      if (submitBtn) submitBtn.disabled = false;
      this.showNotification("Jawaban salah, coba lagi!", "error");
    }
  }

  completeQuest() {
    const quest = this.currentQuestData;
    let xpGained = quest.xp;

    xpGained = this.applySkillBonuses(xpGained, quest.category);

    this.gameData.completedQuests.push(quest.id);
    this.addXP(xpGained);
    this.saveGameData();
    this.closeModal();
    this.renderQuests();

    const allCurrentCompleted = this.currentQuests.every((q) =>
      this.gameData.completedQuests.includes(q.id)
    );

    if (allCurrentCompleted) {
      this.showNotification(
        "Batch selesai! Memuat quest berikutnya...",
        "success"
      );
      setTimeout(() => this.loadNextQuests(), 700);
    }

    this.showNotification(`Quest completed! +${xpGained} XP`, "success");
  }

  applySkillBonuses(baseXP, category) {
    let multiplier = 1;

    this.gameData.unlockedSkills.forEach((skillId) => {
      if (skillId.includes(category)) {
        if (skillId.endsWith("_1")) multiplier += 0.15;
        else if (skillId.endsWith("_2")) multiplier += 0.2;
        else if (skillId.endsWith("_3")) multiplier += 0.25;
      } else if (skillId.includes("_2") || skillId.includes("_3")) {
        multiplier += 0.1;
      }
    });

    return Math.floor(baseXP * multiplier);
  }

  addXP(amount) {
    this.gameData.xp += amount;
    this.checkLevelUp();
    this.updateUI();
  }

  checkLevelUp() {
    const xpThreshold = 50 + (this.gameData.level - 1) * 25;

    if (this.gameData.xp >= xpThreshold) {
      this.gameData.level++;
      this.gameData.skillPoints++;
      this.gameData.xp -= xpThreshold;
      this.showLevelUpModal();
      this.checkLevelUp();
    }
  }

  showLevelUpModal() {
    document.getElementById("newLevel").textContent = this.gameData.level;
    document.getElementById("levelUpModal").classList.remove("hidden");
  }

  closeLevelUpModal() {
    document.getElementById("levelUpModal").classList.add("hidden");
    this.updateUI();
  }

  renderSkillTree() {
    if (
      !this.gameData ||
      !Array.isArray(this.gameData.unlockedSkills) ||
      typeof this.gameData.skillPoints !== "number"
    ) {
      console.error("Invalid game state in renderSkillTree");
      this.showNotification(
        "Error: Game state invalid. Please refresh.",
        "error"
      );
      return;
    }

    Object.keys(this.skillTree).forEach((category) => {
      const container = document.getElementById(`${category}Skills`);
      if (!container) {
        console.error(`Container for ${category} skills not found`);
        return;
      }

      container.innerHTML = "";

      this.skillTree[category].forEach((skill) => {
        try {
          const isUnlocked = this.gameData.unlockedSkills.includes(skill.id);
          const canAfford = this.gameData.skillPoints >= skill.cost;
          const skillTier = parseInt(skill.id.split("_")[1], 10);
          const prevTierId =
            skillTier > 1 ? `${category}_${skillTier - 1}` : null;
          const hasPrev =
            !prevTierId || this.gameData.unlockedSkills.includes(prevTierId);

          const skillElement = document.createElement("div");
          const classes = ["skill-node"];
          if (isUnlocked) classes.push("unlocked");
          else if (!hasPrev || !canAfford) classes.push("locked");
          skillElement.className = classes.join(" ");

          skillElement.innerHTML = `
            <div class="skill-name">${skill.name}</div>
            <div class="skill-effect">${skill.effect}</div>
            <div class="skill-cost" style="color: ${
              canAfford ? "#4ade80" : "#ef4444"
            }">Cost: ${skill.cost} SP</div>
          `;

          if (!isUnlocked) {
            skillElement.style.cursor = "pointer";
            skillElement.addEventListener("click", (e) => {
              e.preventDefault();
              e.stopPropagation();

              const currentCanAfford = this.gameData.skillPoints >= skill.cost;
              const currentHasPrev =
                skillTier === 1 ||
                this.gameData.unlockedSkills.includes(
                  `${category}_${skillTier - 1}`
                );

              if (!currentHasPrev) {
                this.showNotification(
                  "Unlock skill tier sebelumnya dulu!",
                  "error"
                );
                return;
              }

              if (!currentCanAfford) {
                this.showNotification(
                  `Skill point tidak cukup! Dibutuhkan ${skill.cost} SP`,
                  "error"
                );
                return;
              }

              this.unlockSkill(skill);
            });
          }

          if (!isUnlocked && !hasPrev) {
            const hint = document.createElement("div");
            hint.style.cssText =
              "font-size: 0.75rem; color: #fca5a5; margin-top: 0.5rem;";
            hint.textContent = "Unlock previous tier first";
            skillElement.appendChild(hint);
          }

          container.appendChild(skillElement);
        } catch (error) {
          console.error(`Error rendering skill ${skill.id}:`, error);
        }
      });
    });
  }

  unlockSkill(skill) {
    if (!this.gameData || typeof this.gameData.skillPoints !== "number") {
      console.error("Invalid game state");
      this.showNotification(
        "Error: Invalid game state. Please refresh the page.",
        "error"
      );
      return;
    }

    if (this.gameData.unlockedSkills.includes(skill.id)) {
      this.showNotification("Skill sudah terbuka!", "error");
      return;
    }

    const skillTier = parseInt(skill.id.split("_")[1]);
    const category = skill.id.split("_")[0];

    if (skillTier > 1) {
      const prevTierSkillId = `${category}_${skillTier - 1}`;
      if (!this.gameData.unlockedSkills.includes(prevTierSkillId)) {
        this.showNotification("Unlock skill tier sebelumnya dulu!", "error");
        return;
      }
    }

    if (this.gameData.skillPoints < skill.cost) {
      this.showNotification(
        `Skill point tidak cukup! Dibutuhkan ${skill.cost} SP`,
        "error"
      );
      return;
    }

    try {
      this.gameData.skillPoints -= skill.cost;
      this.gameData.unlockedSkills.push(skill.id);

      this.saveGameData();

      this.updateUI();
      this.renderSkillTree();

      this.showNotification(
        `Skill unlocked: ${skill.name}! (${this.gameData.skillPoints} SP tersisa)`,
        "success"
      );
    } catch (error) {
      console.error("Error unlocking skill:", error);
      this.gameData.skillPoints += skill.cost;
      this.gameData.unlockedSkills = this.gameData.unlockedSkills.filter(
        (id) => id !== skill.id
      );
      this.showNotification(
        "Error saat membuka skill. Silakan coba lagi.",
        "error"
      );
    }
  }

  updateUI() {
    document.getElementById("playerNameDisplay").textContent =
      this.gameData.name;
    document.getElementById("playerRoleDisplay").textContent =
      this.gameData.role;

    document.getElementById("currentLevel").textContent = this.gameData.level;
    document.getElementById("currentXP").textContent = this.gameData.xp;
    const maxXP = 50 + (this.gameData.level - 1) * 25;
    document.getElementById("maxXP").textContent = maxXP;
    const xpProgress = (this.gameData.xp / maxXP) * 100;
    document.getElementById("xpProgress").style.width = `${xpProgress}%`;
    document.getElementById("skillPoints").textContent =
      this.gameData.skillPoints;

    document.getElementById("goldDisplay").textContent = this.gameData.gold;
    document.getElementById("reputationDisplay").textContent =
      this.gameData.reputation;

    document.getElementById("businessStat").textContent =
      this.gameData.stats.business;
    document.getElementById("leadershipStat").textContent =
      this.gameData.stats.leadership;
    document.getElementById("innovationStat").textContent =
      this.gameData.stats.innovation;
    document.getElementById("influenceStat").textContent =
      this.gameData.stats.influence;
  }

  closeModal() {
    document.getElementById("questModal").classList.add("hidden");
    this.currentQuestData = null;

    if (this.minigameTimerId) {
      clearInterval(this.minigameTimerId);
      this.minigameTimerId = null;
    }
    const startBtn = document.getElementById("startMinigame");
    if (startBtn) startBtn.style.display = "block";

    const submitBtn = document.getElementById("submitAnswer");
    const completeBtn = document.getElementById("completeQuest");
    if (submitBtn) {
      submitBtn.classList.remove("hidden");
      submitBtn.disabled = true;
    }
    if (completeBtn) {
      completeBtn.classList.add("hidden");
    }
  }

  showNotification(message, type) {
    const notification = document.getElementById("notification");
    notification.textContent = message;
    notification.className = `notification ${type}`;
    notification.classList.remove("hidden");

    setTimeout(() => {
      notification.classList.add("hidden");
    }, 3000);
  }

  saveGameData() {
    localStorage.setItem("businessQuestRPG", JSON.stringify(this.gameData));
  }

  loadGameData() {
    const saved = localStorage.getItem("businessQuestRPG");
    if (saved) {
      this.gameData = { ...this.gameData, ...JSON.parse(saved) };
    }
  }

  resetGame() {
    if (confirm("Apakah kamu yakin mau reset semua progress?")) {
      localStorage.removeItem("businessQuestRPG");
      location.reload();
    }
  }

  renderQuestChains() {
    const chainList = document.getElementById("questChainList");
    chainList.innerHTML = "";

    Object.entries(this.questChains).forEach(([chainId, chain]) => {
      if (chain.status === "unlocked") {
        const chainElement = document.createElement("div");
        chainElement.className = "quest-chain-item";

        const progress = chain.chainProgress;
        const totalQuests = chain.quests.length;

        chainElement.innerHTML = `
          <div class="chain-header">
            <div class="chain-name">${chain.name}</div>
            <div class="chain-progress">Progress: ${progress}/${totalQuests}</div>
          </div>
          <div class="chain-description">${chain.description}</div>
          <div class="chain-rewards">
            <div class="reward-item">
              <img src="icons/gold.png" alt="Gold" class="stat-icon">
              ${chain.rewards.gold}
            </div>
            <div class="reward-item">
              <img src="icons/reputation.png" alt="Reputation" class="stat-icon">
              ${chain.rewards.reputation}
            </div>
          </div>
        `;

        if (progress < totalQuests) {
          const nextQuest = this.questPool.find(
            (q) => q.chainId === chainId && q.chainStep === progress + 1
          );
          if (nextQuest) {
            chainElement.style.cursor = "pointer";
            chainElement.addEventListener("click", () =>
              this.openQuest(nextQuest)
            );
          }
        }

        chainList.appendChild(chainElement);
      }
    });
  }

  startMinigame() {
    const quest = this.currentQuestData;
    if (!quest || !quest.task) return;

    const gameArea = document.getElementById("minigameArea");
    const timerDisplay = document.getElementById("gameTimer");
    const scoreDisplay = document.getElementById("gameScore");

    this.minigameScore = 0;
    scoreDisplay.textContent = this.minigameScore;

    const startBtn = document.getElementById("startMinigame");
    if (startBtn) startBtn.style.display = "none";

    const submitMini = document.getElementById("submitMinigame");
    const completeMini = document.getElementById("completeMinigame");
    if (submitMini) submitMini.disabled = true;
    if (completeMini) completeMini.classList.add("hidden");

    switch (quest.task.type) {
      case "business_canvas":
        this.setupBusinessCanvasGame(gameArea, quest.task.components);
        break;
      case "pitch_deck":
        this.setupPitchDeckGame(gameArea, quest.task.slides);
        break;
      case "market_simulation":
        this.setupMarketSimulation(gameArea, quest.task);
        break;
      case "market_research":
        this.setupMarketResearch(gameArea, quest.task);
        break;
      case "strategy_planning":
        this.setupStrategyPlanning(gameArea, quest.task);
        break;
      case "market_battle":
        this.setupMarketBattle(gameArea, quest.task);
        break;
    }

    let timeLeft = quest.task.time || 60;
    timerDisplay.textContent = timeLeft;
    if (this.minigameTimerId) clearInterval(this.minigameTimerId);
    this.minigameTimerId = setInterval(() => {
      timeLeft -= 1;
      timerDisplay.textContent = timeLeft;
      if (timeLeft <= 0) {
        clearInterval(this.minigameTimerId);
        this.minigameTimerId = null;
        this.endMinigame(this.minigameScore);
      }
    }, 1000);
  }

  setupBusinessCanvasGame(gameArea, components) {
    gameArea.innerHTML = `
      <div class="canvas-board">
        <div class="canvas-components">
          ${components
            .map(
              (c) =>
                `<div class="canvas-item" draggable="true" data-component="${c}">${c}</div>`
            )
            .join("")}
        </div>
        <div class="canvas-slots">
          ${components
            .map(
              (c) =>
                `<div class="canvas-slot" data-expected="${c}"><span class="slot-hint">${c}</span></div>`
            )
            .join("")}
        </div>
      </div>
    `;

    const compArea = gameArea.querySelector(".canvas-components");
    const slots = [...gameArea.querySelectorAll(".canvas-slot")];

    gameArea.querySelectorAll(".canvas-item").forEach((item) => {
      item.addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("text/plain", item.dataset.component);
        item.classList.add("dragging");
      });

      item.addEventListener("dragend", () => {
        item.classList.remove("dragging");
      });
    });

    slots.forEach((slot) => {
      slot.addEventListener("dragover", (e) => {
        e.preventDefault();
        slot.classList.add("drag-over");
      });

      slot.addEventListener("dragleave", () => {
        slot.classList.remove("drag-over");
      });

      slot.addEventListener("drop", (e) => {
        e.preventDefault();
        slot.classList.remove("drag-over");
        const componentName = e.dataTransfer.getData("text/plain");
        const dragged = gameArea.querySelector(
          `[data-component="${componentName}"]`
        );
        if (!dragged) return;

        const existing = slot.querySelector(".canvas-item");
        if (existing) compArea.appendChild(existing);

        slot.appendChild(dragged);

        const expected = slot.dataset.expected;
        if (componentName === expected) {
          slot.classList.add("correct");
          dragged.classList.add("correct");
          if (!dragged.querySelector(".check-mark")) {
            const mark = document.createElement("span");
            mark.className = "check-mark";
            mark.textContent = "✓";
            dragged.appendChild(mark);
          }

          if (!slot.dataset.counted) {
            slot.dataset.counted = "true";
            this.minigameScore =
              (this.minigameScore || 0) + Math.floor(100 / components.length);
            const scoreDisplay = document.getElementById("gameScore");
            if (scoreDisplay) scoreDisplay.textContent = this.minigameScore;
          }
        } else {
          slot.classList.add("error");
          setTimeout(() => {
            slot.classList.remove("error");
            compArea.appendChild(dragged);
          }, 700);
        }
      });
    });

    const finishWrap = document.createElement("div");
    finishWrap.style.marginTop = "1rem";
    const finishBtn = document.createElement("button");
    finishBtn.className = "game-btn";
    finishBtn.textContent = "Finish";
    finishBtn.addEventListener("click", () => {
      this.endMinigame(this.minigameScore || 0);
    });
    finishWrap.appendChild(finishBtn);
    gameArea.appendChild(finishWrap);
  }

  setupPitchDeckGame(gameArea, slides) {
    gameArea.innerHTML = `
      <div class="drag-drop-area" id="pitchArea">
        ${slides
          .map(
            (s, i) =>
              `<div class="draggable-item" draggable="true" data-slide="${s}">${s}</div>`
          )
          .join("")}
      </div>
    `;

    const area = gameArea.querySelector("#pitchArea");
    area.querySelectorAll(".draggable-item").forEach((item) => {
      item.addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("text/plain", item.dataset.slide);
        item.classList.add("dragging");
      });
      item.addEventListener("dragend", () => item.classList.remove("dragging"));
    });

    area.addEventListener("dragover", (e) => e.preventDefault());
    area.addEventListener("drop", (e) => {
      e.preventDefault();
      const slide = e.dataTransfer.getData("text/plain");
      const dragged = area.querySelector(`[data-slide="${slide}"]`);
      const after = this.getDragAfterElement(area, e.clientY);
      if (after == null) area.appendChild(dragged);
      else area.insertBefore(dragged, after);
    });

    const finishWrap = document.createElement("div");
    finishWrap.style.marginTop = "1rem";
    const finishBtn = document.createElement("button");
    finishBtn.className = "game-btn";
    finishBtn.textContent = "Finish";
    finishBtn.addEventListener("click", () => {
      const ordered = [...area.querySelectorAll(".draggable-item")].map(
        (d) => d.dataset.slide
      );
      let correct = 0;
      for (let i = 0; i < slides.length; i++)
        if (ordered[i] === slides[i]) correct++;
      const percent = Math.round((correct / slides.length) * 100);
      this.endMinigame(percent);
    });
    finishWrap.appendChild(finishBtn);
    gameArea.appendChild(finishWrap);
  }

  setupMarketSimulation(gameArea, task) {
    gameArea.innerHTML = `
      <div class="game-instructions"><strong>${task.question}</strong></div>
      <p class="intro-desc">This is a simple simulation placeholder. Adjust sliders and click Finish to evaluate.</p>
      <div class="sim-controls" style="display:flex;flex-direction:column;gap:0.5rem;">${task.channels
        .map(
          (c) =>
            `<label>${c}: <input type="range" min="0" max="100" value="${Math.floor(
              100 / task.channels.length
            )}" data-channel="${c}"></label>`
        )
        .join("")}</div>
    `;

    const finishWrap = document.createElement("div");
    finishWrap.style.marginTop = "1rem";
    const finishBtn = document.createElement("button");
    finishBtn.className = "game-btn";
    finishBtn.textContent = "Finish";
    finishBtn.addEventListener("click", () => {
      const sliders = gameArea.querySelectorAll('input[type="range"]');
      let total = 0;
      sliders.forEach((s) => (total += parseInt(s.value) || 0));
      const diff = Math.abs(100 - total);
      const score = Math.max(0, 100 - diff);
      this.endMinigame(score);
    });
    finishWrap.appendChild(finishBtn);
    gameArea.appendChild(finishWrap);
  }

  setupMarketResearch(gameArea, task) {
    gameArea.innerHTML = `
      <div class="game-instructions"><strong>${task.question}</strong></div>
      <div class="task-options">${task.competitors
        .map((c, i) => `<div class="task-option" data-index="${i}">${c}</div>`)
        .join("")}</div>
    `;

    gameArea.querySelectorAll(".task-option").forEach((opt) => {
      opt.addEventListener("click", () => {
        gameArea
          .querySelectorAll(".task-option")
          .forEach((o) => o.classList.remove("selected"));
        opt.classList.add("selected");
      });
    });

    const finishWrap = document.createElement("div");
    finishWrap.style.marginTop = "1rem";
    const finishBtn = document.createElement("button");
    finishBtn.className = "game-btn";
    finishBtn.textContent = "Finish";
    finishBtn.addEventListener("click", () => {
      const sel = gameArea.querySelector(".task-option.selected");
      const score = sel ? 80 : 40;
      this.endMinigame(score);
    });
    finishWrap.appendChild(finishBtn);
    gameArea.appendChild(finishWrap);
  }

  setupStrategyPlanning(gameArea, task) {
    gameArea.innerHTML = `
      <div class="game-instructions"><strong>${
        task.question || "Plan your strategy"
      }</strong></div>
      <p class="intro-desc">(Placeholder) Click Finish to evaluate your plan.</p>
    `;
    const finishWrap = document.createElement("div");
    finishWrap.style.marginTop = "1rem";
    const finishBtn = document.createElement("button");
    finishBtn.className = "game-btn";
    finishBtn.textContent = "Finish";
    finishBtn.addEventListener("click", () => this.endMinigame(75));
    finishWrap.appendChild(finishBtn);
    gameArea.appendChild(finishWrap);
  }

  setupMarketBattle(gameArea, task) {
    gameArea.innerHTML = `
      <div class="game-instructions"><strong>${task.question}</strong></div>
      <p class="intro-desc">(Placeholder) Simulate a market battle and click Finish.</p>
    `;
    const finishWrap = document.createElement("div");
    finishWrap.style.marginTop = "1rem";
    const finishBtn = document.createElement("button");
    finishBtn.className = "game-btn";
    finishBtn.textContent = "Finish";
    finishBtn.addEventListener("click", () => this.endMinigame(80));
    finishWrap.appendChild(finishBtn);
    gameArea.appendChild(finishWrap);
  }

  endMinigame(score) {
    const quest = this.currentQuestData;
    const passing = score >= (quest.task.passingScore || 70);

    const submitMini = document.getElementById("submitMinigame");
    const completeMini = document.getElementById("completeMinigame");

    if (passing) {
      if (submitMini) {
        submitMini.disabled = false;
      }
      if (completeMini) {
        completeMini.classList.remove("hidden");
      }

      this.showNotification(
        "Great! You passed the minigame. Click Submit Game to claim results.",
        "success"
      );
    } else {
      this.showNotification("Try again to get a better score!", "error");
    }

    this.minigameScore = score;
    this.saveGameData();
    this.updateUI();
  }

  submitMinigame() {
    const quest = this.currentQuestData;
    if (!quest) return;

    let xpGained = quest.xp;
    xpGained = this.applySkillBonuses(xpGained, quest.category);

    this.gameData.completedQuests.push(quest.id);
    this.addXP(xpGained);
    if (quest.chainId) {
      this.questChains[quest.chainId].chainProgress++;
      const chain = this.questChains[quest.chainId];
      if (chain.chainProgress === chain.quests.length) {
        const rewards = chain.rewards;
        this.gameData.gold += rewards.gold;
        this.gameData.reputation += rewards.reputation;
        Object.entries(rewards.stats).forEach(([stat, value]) => {
          this.gameData.stats[stat] += value;
        });
        this.showNotification(
          `Quest Chain Completed! You earned ${rewards.gold} gold and ${rewards.reputation} reputation!`,
          "success"
        );
      }
    }

    this.saveGameData();
    this.updateUI();

    document.getElementById("minigameModal").classList.add("hidden");
    const submitMini = document.getElementById("submitMinigame");
    const completeMini = document.getElementById("completeMinigame");
    if (submitMini) {
      submitMini.disabled = true;
    }
    if (completeMini) {
      completeMini.classList.add("hidden");
    }

    const startBtn = document.getElementById("startMinigame");
    if (startBtn) startBtn.style.display = "block";

    this.showNotification(`Quest completed! +${xpGained} XP`, "success");
    this.renderQuests();
    const allCurrentCompleted = this.currentQuests.every((q) =>
      this.gameData.completedQuests.includes(q.id)
    );
    if (allCurrentCompleted) {
      setTimeout(() => this.loadNextQuests(), 700);
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new BusinessQuestRPG();
});

// PWA
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("service-worker.js")
      .then(() => console.log("Service Worker registered!"))
      .catch((err) => console.log("SW registration failed:", err));
  });
}
