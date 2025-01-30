const { Router } = require('express');
const { Users } = require('../models/index')

const router = Router();

router.get('/:id?', async (req, res, next) => {
    try {
        const { id } = req.params;
        if (id) {
            return await Users.findOne({ where: { id: id } })
                .then((Contenido) => res.status(200).send(Contenido))
                .catch(() => res.status(404).json({ message: 'no se encuentra usuario' }))
        }
        await Users.findAll()
            .then((Contenido) => res.status(200).send(Contenido))
    } catch (error) {
        console.error(error)
        next(error)
    }

})

router.post('/', async (req, res, next) => {
    try {
        await Users.create(req.body)
            .then((r) => res.status(200).send(r))
            .catch((error) => next(error))
    } catch (error) {
        console.error(error)
        next(error)
    }

})


router.put('/:id', async (req, res, next) => {
    const { id } = req.params
    try {
        const task = await Users.findOne({ where: { id } })

        if (!task) return res.status(404).json({ message: 'No se encuentra usuario' })

        return Users.update(req.body, { where: { id } }).then(() => res.status(200).json({ message: 'Usuario actualizado' }))

    } catch (error) {
        console.error(error)
        next(error)
    }

})

router.delete('/:id', async (req, res, next) => {
    const { id } = req.params
    try {
        const response = await Users.destroy({
            where: {
                id
            }
        })
        if (response > 0) return res.status(200).json({ message: 'Usuario eliminado' })

        return res.status(404).send('no se encuentra Usuario')

    } catch (error) {
        console.error(error)
        next(error)
    }
})


module.exports = router;