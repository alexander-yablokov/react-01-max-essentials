Я случайно добавил node_modules в коммит
Как мне от них избавиться?


Сначала добавьте node_modules в .gitignore:
Создайте или отредактируйте файл .gitignore в корне вашего проекта и добавьте строку:
node_modules/

Затем удалите node_modules из индекса Git, не удаляя сами файлы:
git push origin your-branch-name --force

Теперь создайте новый коммит:
git add .
git commit -m "Remove node_modules from git tracking"

Если вы уже отправили коммит с node_modules на удаленный репозиторий, вам нужно будет сделать форсированный push:
git push origin your-branch-name --force

Замените your-branch-name на имя вашей текущей ветки (например, main или master).

Важные замечания:

Будьте осторожны с --force. Эта команда перезапишет историю удаленного репозитория. Если вы работаете в команде, убедитесь, что ваши коллеги знают об этих изменениях.
Если вы используете эти команды в общем репозитории, убедитесь, что вы не удаляете изменения других людей.
После этих действий папка node_modules останется на вашем локальном компьютере, но Git больше не будет её отслеживать.
