"use strict";
const {
  Arena,
  Image,
  MetroStation,
  Favourite,
  Event,
  Date,
  ArenaDate,
  User,
} = require("../db/models");

class ArenaServices {
  async getAllArenas() {
    return Arena.findAll({
      include: [
        { model: MetroStation },
        { model: Event },
        {
          model: Date,
          through: { model: ArenaDate },
        },
        {
          model: User,
          through: { model: Favourite },
        },
        { model: Image }, // Добавляем изображение
      ],
    });
  }

  async getArenaById(id) {
    return Arena.findByPk(id, {
      include: [
        { model: MetroStation },
        { model: Event },
        {
          model: Date,
          through: { model: ArenaDate },
        },
        {
          model: User,
          through: { model: Favourite },
        },
        { model: Image }, // Добавляем изображение
      ],
    });
  }

  async createArena(data, imagePaths) {
    // Создаем арену
    const arena = await Arena.create(data);

    // Создаем изображения
    const images = imagePaths.map((path) => ({ url: path, arenaId: arena.id }));
    await Image.bulkCreate(images);

    return arena;
  }

  async updateArena(id, userId, data, imagePaths) {
    const arena = await Arena.findOne({ where: { id, creatorId: userId } });
    if (arena) {
      // Обновляем арену
      await arena.update(data);

      // Удаляем старые изображения
      await Image.destroy({ where: { arenaId: id } });

      // Добавляем новые изображения
      if (imagePaths.length > 0) {
        const images = imagePaths.map((path) => ({ url: path, arenaId: id }));
        await Image.bulkCreate(images);
      }

      return arena;
    }
    return null;
  }

  async deleteArena(id) {
    const arena = await Arena.findOne({ where: { id } });
    if (arena) {
      // Удаляем изображения перед удалением арены
      await Image.destroy({ where: { arenaId: id } });
      await arena.destroy();
      return true;
    }
    return false;
  }
}

module.exports = new ArenaServices();