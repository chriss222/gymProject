import React from 'react'

function Footer() {
    return (
        <footer className='bg-primary-100 py-16'>
            <div className='justify-content mx-auto w-5/6 gap-16 md:flex'> 
                <div className='mt-16 basis-1/2 md:mt-0'>
                    <h1>GYM</h1>
                    <p className='my-5'>
                        Pellentesque elit ullamcorper dignissim cras. Eget mauris pharetra et ultrices. 
                        In hendrerit gravida rutrum quisque non. Sed arcu non odio euismod lacinia at quis. 
                    </p>
                    <p>
                        ©All Rights Reserved.
                    </p>
                </div>
                <div className='mt-16 basis-1/4 md:mt-0'>
                    <h4 className='font-bold'>Links</h4>
                    <p className='my-5'>Nisl nisi scelerisque eu ultrices vitae auctor eu augue ut. Et leo duis ut diam quam nulla porttitor.</p>
                    <p className='my-5'>Pretium fusce id velit ut tortor pretium viverra suspendisse.</p>
                    <p className='my-5'>Nibh venenatis cras sed felis eget velit aliquet sagittis. In massa tempor nec feugiat nisl pretium fusce id velit. </p>
                </div>
                <div>
                    <h4 className='font-bold'>Contact Us</h4>
                    <p className='my-5'>Nisl nisi scelerisque eu ultrices vitae auctor eu augue ut. Et leo duis ut diam quam nulla porttitor.</p>
                    <p className='my-5'>Pretium fusce id velit ut tortor pretium viverra suspendisse.</p>
                    <p className='my-5'>Nibh venenatis cras sed felis eget velit aliquet sagittis. In massa tempor nec feugiat nisl pretium fusce id velit. </p>       
                </div>
            </div>
        </footer>
    )
}

export default Footer