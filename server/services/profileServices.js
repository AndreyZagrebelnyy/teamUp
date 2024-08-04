const { Profile } = require('../db/models');

class ProfileServices {
  async getAllProfiles() {
    return Profile.findAll();
  }

  async getProfilesById(id) {
    return Profile.findByPk(id);
  }

  async createProfile(data) {
    return Profile.create(data);
  }

  async updateProfile(id, userId, data) {
    const profile = await Profile.findOne({ where: { id, userId } });
    if (profile) {
      return profile.update(data);
    }
    return null;
  }

  async deleteProfile(id) {
    const profile = await Profile.findOne({ where: { id } });
    if (profile) {
        profile.destroy();
      return true;
    }
    return false;
  }
}

module.exports = new ProfileServices();
