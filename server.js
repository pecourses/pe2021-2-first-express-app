const http = require('http');
const app = require('./app');

// берем номер порта из переменной окружения PORT в process.env.
// если там нет значения, но устанавливаем литерально 5000.
// не назначать номера портов 0-1023 (зарезервированы).
// см. занятые порты: lsof -i -P -n
const PORT = process.env.PORT || 5000;

// создание сервера и назначение экземпляра app в качестве requestListener`а
const httpServer = http.createServer(app);

// запуск сервера на порту PORT
httpServer.listen(PORT, () => console.log(`Server is listening ${PORT} port`));
