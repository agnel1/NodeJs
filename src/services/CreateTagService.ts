import { getCustomRepository } from "typeorm"
import { TagsRepositories } from "../repositories/TagsRepositories"


class CreateTagService {
    async execute(name: string) {
        const tagsRepositories = getCustomRepository(TagsRepositories)
        if (!name) {
            throw new Error("Nome incorreto!");
        }

        //basicamente isso aqui é um SELECT * FROM TAGS WHERE NAME = 'name'
        const tagAlreadyExists = await tagsRepositories.findOne({ name })
        if (tagAlreadyExists) {
            throw new Error("Essa tag já existe");
        }

        const tag = await tagsRepositories.create({ name })
        await tagsRepositories.save(tag)

        return tag;
    }
}
export { CreateTagService }