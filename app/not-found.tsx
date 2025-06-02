import Link from 'next/link';

export const metadata = {
    title: '404 - Không Tìm Thấy Trang',
};

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
            <h1 className="text-6xl font-bold mb-4">404</h1>
            <p className="text-xl mb-6">Oops! Trang bạn tìm không tồn tại.</p>
            <Link href="/" className="px-4 py-2 bg-yellow-400 text-black rounded hover:bg-yellow-500 transition-colors">
                Quay lại Trang chủ
            </Link>
        </div>
    );
}