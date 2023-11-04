import boom from '@hapi/boom';

const genericCrud = (model) => ({
    async get({ params }, res) {
        try {
            const item = await model.findById(params.id);

            return res.status(200).send(item);
        } catch (err) {
            return res.status(400).send(boom.boomify(err));
        }
    },
    async getAll(_, res) {
        try {
            const items = await model.find();

            return res.status(200).send(items);
        } catch (err) {
            return res.status(400).send(boom.boomify(err));
        }
    },
    async create({ body }, res) {
        try {
            console.log("body", body)
            const item = new model(body);
            console.log('item', item)
            const newItem = await item.save();

            return res.status(200).send(newItem);
        } catch (err) {
            return res.status(400).send(boom.boomify(err));
        }
    },
    async update({ params, body }, res) {
        try {
            const item = await model.findByIdAndUpdate(params.id, body, { new: true });

            return res.status(200).send(item);
        } catch (err) {
            return res.status(400).send(boom.boomify(err));
        }
    },
    async delete({ params }, res) {
        try {
            await model.findByIdAndDelete(params.id);

            return res.status(200).send({ status: 'OK', message: 'Product successfully deleted' });
        } catch (err) {
            return res.status(400).send(boom.boomify(err));
        }
    }
});

export default genericCrud;
