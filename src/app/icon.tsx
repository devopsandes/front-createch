import { ImageResponse } from 'next/og'
export const runtime = 'edge'
export const size = {
    width: 64,
    height: 64,
}
export const contentType = 'image/png'

export default function Icon() {
    return new ImageResponse(
        (
            <div
                style={{
                    fontSize: 52,
                    background: 'black',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    borderRadius: '12px',
                    fontWeight: 900,
                    border: '3px solid #ef4444',
                    paddingTop: '4px',
                }}
            >
                C
            </div>
        ),
        {
            ...size,
        }
    )
}
