import { useState } from "react";
import Icon from "@/components/ui/icon";

type Theme = "light" | "dark";
type Section = "chats" | "contacts" | "folders" | "favorites" | "cloud" | "profile" | "settings" | "premium";

const STORIES = [
  { id: 1, name: "Анна", avatar: "А", color: "#F59E0B", online: true },
  { id: 2, name: "Дима", avatar: "Д", color: "#3B82F6", online: false },
  { id: 3, name: "Катя", avatar: "К", color: "#8B5CF6", online: true },
  { id: 4, name: "Макс", avatar: "М", color: "#10B981", online: true },
  { id: 5, name: "Оля", avatar: "О", color: "#EF4444", online: false },
];

const CHATS = [
  { id: 1, name: "Анна Петрова", lastMsg: "Привет! Как дела? 😊", time: "14:32", avatar: "А", color: "#F59E0B", unread: 3, online: true, pinned: true },
  { id: 2, name: "Команда Fractal", lastMsg: "Новая версия уже готова!", time: "13:15", avatar: "F", color: "#FACC15", unread: 12, online: false, pinned: true },
  { id: 3, name: "Дима Козлов", lastMsg: "Окей, увидимся завтра", time: "12:00", avatar: "Д", color: "#3B82F6", unread: 0, online: false, pinned: false },
  { id: 4, name: "Катя Иванова", lastMsg: "Спасибо за подарок! 🎁", time: "Вчера", avatar: "К", color: "#8B5CF6", unread: 0, online: true, pinned: false },
  { id: 5, name: "Макс Смирнов", lastMsg: "Посмотри это видео", time: "Вчера", avatar: "М", color: "#10B981", unread: 1, online: true, pinned: false },
  { id: 6, name: "Избранное", lastMsg: "Сохранённые заметки", time: "Пн", avatar: "⭐", color: "#F59E0B", unread: 0, online: false, pinned: false },
];

const INIT_MESSAGES = [
  { id: 1, from: "them", text: "Привет! Как дела?", time: "14:20", reactions: ["❤️", "😂"] },
  { id: 2, from: "me", text: "Всё отлично, спасибо! А у тебя?", time: "14:21", reactions: [] },
  { id: 3, from: "them", text: "Тоже хорошо! Ты видел новую функцию в Fractal?", time: "14:25", reactions: [] },
  { id: 4, from: "me", text: "Да, подарки — это просто огонь 🔥", time: "14:27", reactions: ["🔥"] },
  { id: 5, from: "them", text: "Согласна! Кстати, когда встретимся?", time: "14:30", reactions: [] },
  { id: 6, from: "them", text: "Привет! Как дела? 😊", time: "14:32", reactions: [] },
];

const CONTACTS = [
  { id: 1, name: "Анна Петрова", status: "На связи", avatar: "А", color: "#F59E0B", online: true },
  { id: 2, name: "Дима Козлов", status: "Был час назад", avatar: "Д", color: "#3B82F6", online: false },
  { id: 3, name: "Катя Иванова", status: "В сети", avatar: "К", color: "#8B5CF6", online: true },
  { id: 4, name: "Макс Смирнов", status: "В сети", avatar: "М", color: "#10B981", online: true },
  { id: 5, name: "Оля Соколова", status: "Был вчера", avatar: "О", color: "#EF4444", online: false },
  { id: 6, name: "Серёжа Новиков", status: "Был давно", avatar: "С", color: "#6366F1", online: false },
];

const GIFTS = [
  { id: 1, emoji: "🎁", name: "Подарок", from: "Анна" },
  { id: 2, emoji: "💎", name: "Кристалл", from: "Макс" },
  { id: 3, emoji: "🌹", name: "Роза", from: "Катя" },
];

export default function Index() {
  const [theme, setTheme] = useState<Theme>("light");
  const [section, setSection] = useState<Section>("chats");
  const [activeChat, setActiveChat] = useState(CHATS[0]);
  const [inputMsg, setInputMsg] = useState("");
  const [messages, setMessages] = useState(INIT_MESSAGES);
  const [showGiftModal, setShowGiftModal] = useState(false);

  const isDark = theme === "dark";

  const sendMessage = () => {
    if (!inputMsg.trim()) return;
    setMessages(prev => [...prev, {
      id: prev.length + 1, from: "me", text: inputMsg, time: "сейчас", reactions: []
    }]);
    setInputMsg("");
  };

  const bg = isDark ? "bg-[#0e0e0f]" : "bg-[#f5f5f0]";
  const sidebar = isDark ? "bg-[#1a1a1b]" : "bg-white";
  const chatBg = isDark ? "bg-[#111112]" : "bg-[#fafaf7]";
  const msgBg = isDark ? "bg-[#1e1e20]" : "bg-white";
  const textMain = isDark ? "text-white" : "text-[#1a1a1a]";
  const textMuted = isDark ? "text-[#888]" : "text-[#999]";
  const border = isDark ? "border-[#2a2a2b]" : "border-[#e8e8e0]";
  const hoverBg = isDark ? "hover:bg-[#252527]" : "hover:bg-[#f5f5ef]";
  const activeBg = isDark ? "bg-[#252527]" : "bg-[#fff9e6]";
  const inputBg = isDark ? "bg-[#1e1e20] border-[#2a2a2b]" : "bg-[#f5f5f0] border-[#e8e8e0]";

  const navItems = [
    { id: "chats", icon: "MessageCircle", label: "Чаты" },
    { id: "contacts", icon: "Users", label: "Контакты" },
    { id: "folders", icon: "Folder", label: "Папки" },
    { id: "favorites", icon: "Star", label: "Избранное" },
    { id: "cloud", icon: "Cloud", label: "Облако" },
  ];

  const bottomNav = [
    { id: "settings", icon: "Settings", label: "Настройки" },
    { id: "premium", icon: "Crown", label: "Премиум" },
  ];

  return (
    <div className={`flex h-screen w-screen overflow-hidden ${bg}`} style={{ fontFamily: "'Golos Text', sans-serif" }}>

      {/* Крайняя левая панель — иконки */}
      <div className={`flex flex-col items-center py-4 w-16 ${sidebar} border-r ${border} z-10 flex-shrink-0`}>
        <div className="w-10 h-10 rounded-2xl bg-[#FACC15] flex items-center justify-center mb-6 shadow-lg shadow-yellow-300/30 cursor-pointer">
          <span className="text-[#1a1a1a] font-bold text-xl leading-none">F</span>
        </div>

        <div className="flex flex-col gap-1 flex-1 w-full px-2">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => setSection(item.id as Section)}
              title={item.label}
              className={`w-full h-10 rounded-xl flex items-center justify-center transition-all duration-200 relative
                ${section === item.id ? `${activeBg} text-[#FACC15]` : `${textMuted} ${hoverBg}`}`}
            >
              <Icon name={item.icon} size={20} />
              {item.id === "chats" && (
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#FACC15] rounded-full"></span>
              )}
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-1 w-full px-2 mb-2">
          {bottomNav.map(item => (
            <button
              key={item.id}
              onClick={() => setSection(item.id as Section)}
              title={item.label}
              className={`w-full h-10 rounded-xl flex items-center justify-center transition-all duration-200
                ${section === item.id ? `${activeBg} text-[#FACC15]` : `${textMuted} ${hoverBg}`}`}
            >
              <Icon name={item.icon} size={20} />
            </button>
          ))}
          <button
            onClick={() => setSection("profile")}
            title="Профиль"
            className={`w-full h-10 rounded-xl flex items-center justify-center transition-all
              ${section === "profile" ? "ring-2 ring-[#FACC15]" : hoverBg}`}
          >
            <div className="w-7 h-7 rounded-full bg-[#FACC15] flex items-center justify-center text-xs font-bold text-[#1a1a1a]">
              Я
            </div>
          </button>
        </div>
      </div>

      {/* Список (чаты / контакты / и т.д.) */}
      <div className={`w-72 flex flex-col ${sidebar} border-r ${border} flex-shrink-0`}>
        <div className={`flex items-center justify-between px-4 py-3 border-b ${border}`}>
          <h2 className={`font-semibold text-base ${textMain}`}>
            {section === "chats" && "Сообщения"}
            {section === "contacts" && "Контакты"}
            {section === "folders" && "Папки"}
            {section === "favorites" && "Избранное"}
            {section === "cloud" && "Облако"}
            {section === "profile" && "Мой профиль"}
            {section === "settings" && "Настройки"}
            {section === "premium" && "Fractal Premium"}
          </h2>
          <div className="flex gap-1">
            <button
              onClick={() => setTheme(isDark ? "light" : "dark")}
              className={`w-8 h-8 rounded-lg flex items-center justify-center ${hoverBg} ${textMuted} transition-all`}
              title="Сменить тему"
            >
              <Icon name={isDark ? "Sun" : "Moon"} size={16} />
            </button>
            <button className={`w-8 h-8 rounded-lg flex items-center justify-center ${hoverBg} ${textMuted} transition-all`}>
              <Icon name="Search" size={16} />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">

          {/* ЧАТЫ */}
          {section === "chats" && (
            <>
              <div className={`flex gap-3 px-4 py-3 border-b ${border} overflow-x-auto scrollbar-none`}>
                {STORIES.map(s => (
                  <div key={s.id} className="flex flex-col items-center gap-1 flex-shrink-0 cursor-pointer group">
                    <div className="relative">
                      <div
                        className="w-11 h-11 rounded-full flex items-center justify-center font-semibold text-white text-sm ring-2 ring-[#FACC15] ring-offset-2 transition-transform group-hover:scale-105"
                        style={{ backgroundColor: s.color }}
                      >
                        {s.avatar}
                      </div>
                      {s.online && (
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
                      )}
                    </div>
                    <span className={`text-[10px] ${textMuted} w-11 text-center truncate`}>{s.name}</span>
                  </div>
                ))}
              </div>

              {CHATS.map(chat => (
                <div
                  key={chat.id}
                  onClick={() => setActiveChat(chat)}
                  className={`flex items-center gap-3 px-4 py-3 cursor-pointer transition-all duration-150
                    ${activeChat?.id === chat.id ? activeBg : hoverBg}`}
                >
                  <div className="relative flex-shrink-0">
                    <div
                      className="w-11 h-11 rounded-full flex items-center justify-center font-semibold text-white text-base"
                      style={{ backgroundColor: chat.color }}
                    >
                      {chat.avatar}
                    </div>
                    {chat.online && (
                      <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
                    )}
                    {chat.pinned && (
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#FACC15] rounded-full flex items-center justify-center">
                        <Icon name="Pin" size={8} />
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className={`font-medium text-sm ${textMain} truncate`}>{chat.name}</span>
                      <span className={`text-[10px] ${textMuted} flex-shrink-0 ml-1`}>{chat.time}</span>
                    </div>
                    <div className="flex items-center justify-between mt-0.5">
                      <span className={`text-xs ${textMuted} truncate`}>{chat.lastMsg}</span>
                      {chat.unread > 0 && (
                        <span className="ml-1 flex-shrink-0 min-w-[18px] h-[18px] bg-[#FACC15] text-[#1a1a1a] text-[10px] font-bold rounded-full flex items-center justify-center px-1">
                          {chat.unread}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}

          {/* КОНТАКТЫ */}
          {section === "contacts" && (
            <div className="p-3">
              {CONTACTS.map(c => (
                <div key={c.id} className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer ${hoverBg} transition-all`}>
                  <div className="relative">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center font-semibold text-white"
                      style={{ backgroundColor: c.color }}
                    >
                      {c.avatar}
                    </div>
                    {c.online && (
                      <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
                    )}
                  </div>
                  <div>
                    <div className={`font-medium text-sm ${textMain}`}>{c.name}</div>
                    <div className={`text-xs ${textMuted}`}>{c.status}</div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ПАПКИ */}
          {section === "folders" && (
            <div className="p-3 space-y-2">
              {[
                { name: "Работа", count: 8 },
                { name: "Семья", count: 4 },
                { name: "Друзья", count: 15 },
                { name: "Новости", count: 7 },
                { name: "Каналы", count: 12 },
              ].map((f, i) => (
                <div key={i} className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer ${hoverBg} transition-all`}>
                  <div className="w-9 h-9 rounded-xl bg-[#FACC15]/20 flex items-center justify-center">
                    <Icon name="Folder" size={18} className="text-[#FACC15]" />
                  </div>
                  <div className="flex-1">
                    <div className={`font-medium text-sm ${textMain}`}>{f.name}</div>
                    <div className={`text-xs ${textMuted}`}>{f.count} чатов</div>
                  </div>
                </div>
              ))}
              <button className={`w-full p-3 rounded-xl border-2 border-dashed ${border} ${textMuted} text-sm flex items-center justify-center gap-2 ${hoverBg} transition-all`}>
                <Icon name="Plus" size={16} /> Новая папка
              </button>
            </div>
          )}

          {/* ИЗБРАННОЕ */}
          {section === "favorites" && (
            <div className="p-4">
              <div className={`rounded-2xl p-4 text-center ${isDark ? "bg-[#252527]" : "bg-[#fff9e6]"} mb-3`}>
                <div className="text-3xl mb-2">⭐</div>
                <p className={`text-sm font-medium ${textMain}`}>Избранные сообщения</p>
                <p className={`text-xs ${textMuted} mt-1`}>Здесь хранятся все сохранённые сообщения</p>
              </div>
              <div className={`text-xs ${textMuted} text-center mt-8`}>Нет избранных сообщений</div>
            </div>
          )}

          {/* ОБЛАКО */}
          {section === "cloud" && (
            <div className="p-4 space-y-3">
              <div className={`rounded-2xl p-4 ${isDark ? "bg-[#252527]" : "bg-[#f0f9ff]"}`}>
                <div className="flex items-center justify-between mb-3">
                  <span className={`font-semibold text-sm ${textMain}`}>Хранилище</span>
                  <span className={`text-xs ${textMuted}`}>2.1 / 15 ГБ</span>
                </div>
                <div className={`h-2 rounded-full ${isDark ? "bg-[#333]" : "bg-[#e0e0d8]"}`}>
                  <div className="h-2 rounded-full bg-[#FACC15]" style={{ width: "14%" }}></div>
                </div>
              </div>
              {[
                { label: "Фото", icon: "Image" },
                { label: "Видео", icon: "Video" },
                { label: "Документы", icon: "FileText" },
                { label: "Музыка", icon: "Music" },
              ].map((t, i) => (
                <div key={i} className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer ${hoverBg} transition-all`}>
                  <div className="w-9 h-9 rounded-xl bg-[#FACC15]/20 flex items-center justify-center">
                    <Icon name={t.icon} size={18} className="text-[#FACC15]" />
                  </div>
                  <span className={`font-medium text-sm ${textMain}`}>{t.label}</span>
                </div>
              ))}
            </div>
          )}

          {/* ПРОФИЛЬ */}
          {section === "profile" && (
            <div className="p-4">
              <div className={`rounded-2xl p-5 text-center mb-4 ${isDark ? "bg-[#252527]" : "bg-[#fff9e6]"}`}>
                <div className="w-16 h-16 rounded-full bg-[#FACC15] flex items-center justify-center text-2xl font-bold text-[#1a1a1a] mx-auto mb-3 shadow-lg shadow-yellow-300/40">
                  Я
                </div>
                <div className={`font-semibold text-base ${textMain}`}>Мой профиль</div>
                <div className={`text-xs ${textMuted} mt-1`}>@username</div>
                <div className={`text-xs ${textMuted} mt-2 italic`}>Написание кода — мой дзен ✨</div>
              </div>
              <div className="space-y-1">
                {[
                  { icon: "Music", label: "Музыка профиля" },
                  { icon: "Gift", label: `Мои подарки (${GIFTS.length})` },
                  { icon: "Edit", label: "Редактировать профиль" },
                  { icon: "Radio", label: "Личный канал" },
                ].map((item, i) => (
                  <div key={i} className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer ${hoverBg} transition-all`}>
                    <Icon name={item.icon} size={18} className="text-[#FACC15]" />
                    <span className={`text-sm ${textMain}`}>{item.label}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <div className={`text-xs font-semibold ${textMuted} uppercase tracking-wider mb-2 px-1`}>Подарки</div>
                <div className="flex gap-2">
                  {GIFTS.map(g => (
                    <div key={g.id} className={`flex-1 p-3 rounded-xl ${isDark ? "bg-[#252527]" : "bg-[#fff9e6]"} text-center cursor-pointer hover:scale-105 transition-transform`}>
                      <div className="text-2xl">{g.emoji}</div>
                      <div className={`text-[10px] ${textMuted} mt-1`}>{g.from}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* НАСТРОЙКИ */}
          {section === "settings" && (
            <div className="p-3 space-y-1">
              {[
                { icon: "Bell", label: "Уведомления" },
                { icon: "Lock", label: "Конфиденциальность" },
                { icon: "Palette", label: "Оформление" },
                { icon: "Database", label: "Данные и хранилище" },
                { icon: "Smartphone", label: "Устройства" },
                { icon: "Info", label: "О Fractal" },
              ].map((item, i) => (
                <div key={i} className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer ${hoverBg} transition-all`}>
                  <Icon name={item.icon} size={18} className="text-[#FACC15]" />
                  <span className={`text-sm ${textMain}`}>{item.label}</span>
                  <Icon name="ChevronRight" size={14} className={`ml-auto ${textMuted}`} />
                </div>
              ))}
            </div>
          )}

          {/* ПРЕМИУМ */}
          {section === "premium" && (
            <div className="p-4">
              <div className="rounded-2xl overflow-hidden mb-4" style={{ background: "linear-gradient(135deg, #FACC15 0%, #F59E0B 50%, #D97706 100%)" }}>
                <div className="p-5 text-center">
                  <div className="text-3xl mb-2">👑</div>
                  <div className="font-bold text-[#1a1a1a] text-lg">Fractal Premium</div>
                  <div className="text-[#1a1a1a]/60 text-xs mt-1">Разблокируй все возможности</div>
                  <button className="mt-3 px-6 py-2 bg-[#1a1a1a] text-white text-sm font-semibold rounded-full hover:bg-[#333] transition-all">
                    Оформить за 299 ₽/мес
                  </button>
                </div>
              </div>
              {[
                { emoji: "🎁", title: "Эксклюзивные подарки", desc: "Редкие и анимированные подарки" },
                { emoji: "📢", title: "Личные каналы", desc: "Без ограничения подписчиков" },
                { emoji: "☁️", title: "Облако 100 ГБ", desc: "Расширенное хранилище" },
                { emoji: "🎵", title: "Музыка профиля", desc: "Любой трек в профиле" },
              ].map((f, i) => (
                <div key={i} className={`flex items-center gap-3 p-3 rounded-xl mb-2 ${isDark ? "bg-[#252527]" : "bg-[#fff9e6]"}`}>
                  <span className="text-xl">{f.emoji}</span>
                  <div>
                    <div className={`font-medium text-sm ${textMain}`}>{f.title}</div>
                    <div className={`text-xs ${textMuted}`}>{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Область чата */}
      <div className={`flex-1 flex flex-col ${chatBg} min-w-0`}>
        {section === "chats" && activeChat ? (
          <>
            {/* Шапка */}
            <div className={`flex items-center gap-3 px-5 py-3 border-b ${border} ${msgBg} flex-shrink-0`}>
              <div className="relative">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-semibold text-white"
                  style={{ backgroundColor: activeChat.color }}
                >
                  {activeChat.avatar}
                </div>
                {activeChat.online && (
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
                )}
              </div>
              <div className="flex-1">
                <div className={`font-semibold text-sm ${textMain}`}>{activeChat.name}</div>
                <div className="text-xs text-green-500">{activeChat.online ? "В сети" : "Был недавно"}</div>
              </div>
              <div className="flex gap-1">
                <button className={`w-9 h-9 rounded-xl flex items-center justify-center ${hoverBg} transition-all`} title="Звонок">
                  <Icon name="Phone" size={18} className={textMuted} />
                </button>
                <button className={`w-9 h-9 rounded-xl flex items-center justify-center ${hoverBg} transition-all`} title="Видеозвонок">
                  <Icon name="Video" size={18} className={textMuted} />
                </button>
                <button
                  onClick={() => setShowGiftModal(true)}
                  className={`w-9 h-9 rounded-xl flex items-center justify-center ${hoverBg} transition-all`}
                  title="Подарок"
                >
                  <Icon name="Gift" size={18} className="text-[#FACC15]" />
                </button>
                <button className={`w-9 h-9 rounded-xl flex items-center justify-center ${hoverBg} transition-all`}>
                  <Icon name="MoreVertical" size={18} className={textMuted} />
                </button>
              </div>
            </div>

            {/* Сообщения */}
            <div className="flex-1 overflow-y-auto p-5 space-y-3">
              {messages.map(msg => (
                <div key={msg.id} className={`flex ${msg.from === "me" ? "justify-end" : "justify-start"}`}>
                  <div className="max-w-[70%]">
                    <div
                      className={`px-4 py-2.5 rounded-2xl text-sm leading-relaxed
                        ${msg.from === "me"
                          ? "bg-[#FACC15] text-[#1a1a1a] rounded-br-sm"
                          : `${msgBg} ${textMain} rounded-bl-sm shadow-sm border ${border}`
                        }`}
                    >
                      {msg.text}
                      <div className={`text-[10px] mt-1 ${msg.from === "me" ? "text-[#1a1a1a]/50" : textMuted} text-right`}>
                        {msg.time}{msg.from === "me" && " ✓✓"}
                      </div>
                    </div>
                    {msg.reactions.length > 0 && (
                      <div className="flex gap-1 mt-1">
                        {msg.reactions.map((r, i) => (
                          <span key={i} className={`text-xs px-2 py-0.5 rounded-full ${isDark ? "bg-[#252527]" : "bg-white"} shadow-sm border ${border} cursor-pointer hover:scale-110 transition-transform`}>
                            {r}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Ввод */}
            <div className={`px-4 py-3 border-t ${border} ${msgBg} flex-shrink-0`}>
              <div className="flex items-center gap-2">
                <button className={`w-9 h-9 rounded-xl flex items-center justify-center ${hoverBg} transition-all flex-shrink-0`}>
                  <Icon name="Paperclip" size={18} className={textMuted} />
                </button>
                <input
                  value={inputMsg}
                  onChange={e => setInputMsg(e.target.value)}
                  onKeyDown={e => e.key === "Enter" && sendMessage()}
                  placeholder="Написать сообщение..."
                  className={`flex-1 px-4 py-2.5 rounded-xl text-sm outline-none border ${inputBg} ${textMain} transition-all focus:border-[#FACC15]`}
                  style={{ fontFamily: "'Golos Text', sans-serif" }}
                />
                <button className={`w-9 h-9 rounded-xl flex items-center justify-center ${hoverBg} transition-all flex-shrink-0`}>
                  <Icon name="Smile" size={18} className={textMuted} />
                </button>
                <button
                  onClick={sendMessage}
                  className="w-9 h-9 rounded-xl flex items-center justify-center bg-[#FACC15] hover:bg-[#F59E0B] transition-all flex-shrink-0 shadow-sm"
                >
                  <Icon name="Send" size={18} className="text-[#1a1a1a]" />
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center gap-4">
            <div className="w-20 h-20 rounded-3xl bg-[#FACC15] flex items-center justify-center shadow-2xl shadow-yellow-300/40">
              <span className="text-[#1a1a1a] font-bold text-4xl">F</span>
            </div>
            <div className={`text-xl font-semibold ${textMain}`}>Fractal</div>
            <div className={`text-sm ${textMuted} text-center max-w-[220px]`}>
              {section === "chats" ? "Выбери чат, чтобы начать общение" : "Выбери раздел в левой панели"}
            </div>
          </div>
        )}
      </div>

      {/* Модал подарка */}
      {showGiftModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={() => setShowGiftModal(false)}>
          <div className={`${msgBg} rounded-2xl p-6 w-80 shadow-2xl`} onClick={e => e.stopPropagation()}>
            <div className={`font-semibold text-base ${textMain} mb-1 text-center`}>Отправить подарок</div>
            <div className={`text-xs ${textMuted} text-center mb-4`}>{activeChat?.name}</div>
            <div className="grid grid-cols-3 gap-3 mb-4">
              {["🎁", "💎", "🌹", "🏆", "⭐", "🎵", "🍀", "💌", "🌟"].map((emoji, i) => (
                <button
                  key={i}
                  className={`p-3 rounded-xl text-2xl text-center ${hoverBg} hover:ring-2 hover:ring-[#FACC15] transition-all`}
                >
                  {emoji}
                </button>
              ))}
            </div>
            <button
              className="w-full py-2.5 bg-[#FACC15] text-[#1a1a1a] font-semibold rounded-xl hover:bg-[#F59E0B] transition-all"
              onClick={() => setShowGiftModal(false)}
            >
              Отправить
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
