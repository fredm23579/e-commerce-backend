const router = require( 'express' ).Router()
const { Category, Product } = require( '../../models' )

// GET all categories
router.get( '/', async ( req, res ) =>
{
    try
    {
        const categoryData = await Category.findAll( {
            include: [ { model: Product } ],
        } )
        res.status( 200 ).json( categoryData )
    } catch ( err )
    {
        res.status( 500 ).json( err )
    }
} )

// GET a single category
router.get( '/:id', async ( req, res ) =>
{
    try
    {
        const categoryData = await Category.findByPk( req.params.id, {
            include: [ { model: Product } ],
        } )

        if ( !categoryData )
        {
            res.status( 404 ).json( { message: 'No category found with that id!' } )
            return
        }

        res.status( 200 ).json( categoryData )
    } catch ( err )
    {
        res.status( 500 ).json( err )
    }
} )

// CREATE a category
router.post( '/', async ( req, res ) =>
{
    try
    {
        const categoryData = await Category.create( req.body )
        res.status( 200 ).json( categoryData )
    } catch ( err )
    {
        res.status( 400 ).json( err )
    }
} )

// UPDATE a category
router.put( '/:id', async ( req, res ) =>
{
    try
    {
        const categoryData = await Category.update( req.body, {
            where: {
                id: req.params.id,
            },
        } )

        if ( !categoryData[ 0 ] )
        {
            res.status( 404 ).json( { message: 'No category found with that id!' } )
            return
        }

        res.status( 200 ).json( categoryData )
    } catch ( err )
    {
        res.status( 500 ).json( err )
    }
} )

// DELETE a category
router.delete( '/:id', async ( req, res ) =>
{
    try
    {
        const categoryData = await Category.destroy( {
            where: {
                id: req.params.id,
            },
        } )

        if ( !categoryData )
        {
            res.status( 404 ).json( { message: 'No category found with that id!' } )
            return
        }

        res.status( 200 ).json( categoryData )
    } catch ( err )
    {
        res.status( 500 ).json( err )
    }
} )

module.exports = router
