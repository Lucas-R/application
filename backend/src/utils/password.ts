import bcrypt from 'bcrypt';

export async function hash(password: string): Promise<string> {
  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    return hash;
  } catch (error) {
    throw new Error('Falha ao gerar hash da senha');
  }
}

export async function comparePasswords(password: string, hash: string): Promise<boolean> {
    try {
      return await bcrypt.compare(password, hash);
    } catch (error) {
      return false;
    }
  }