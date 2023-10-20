"use client"

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface Props {
    postId: number;
    title: string;
    content: string;
    timestamp: number;
    likes_count: number;
    comments_count: number;
    vaultId: string;
    groupId: string;
    username: string;
}

const PostCard = ({
    postId,
    title,
    content,
    timestamp,
    likes_count,
    comments_count,
    vaultId,
    groupId,
    username
}: Props) => {
    const formatDateString = (timestamp: number) => {
        const date = new Date(timestamp * 1000); 
        return date.toLocaleString();
    };
    const router = useRouter();
    return (
        <article className={`flex w-full flex-col rounded-xl`}>
        <div className="flex items-start justify-between">
            <div className="flex w-full flex-1 flex-row gap-4">
                <div className="flex flex-col items-center">
                    <div className="relative h-11 w-11">
                        <Image 
                            src={`https://api.multiavatar.com/${username}.png`}
                            alt="Profile Image"
                            fill
                            className="rounded-full"
                        />
                    </div>
                    <div className="post-card_bar"/>
                </div>
                <div className="flex w-full flex-col">
                    <div className="w-fit">
                        <h4 className="font-semibold text-light-1">{username}</h4>
                    </div>
                    <h1 className="mt-2 font-bold text-xl text-light-2">{title}</h1>
                    <p className="mt-2 text-small-regular text-sm text-light-2">{content}</p>
                    <div className={`mt-5 flex flex-col gap-3`}>
                        <div className="flex gap3.5">
                            <Image src="/assets/heart-gray.svg" alt="heart" width={24} height={24} className="cursor-pointer object-contain"/>
                            <Image 
                                src="/assets/reply.svg" 
                                alt="reply" width={24} 
                                height={24} 
                                className="cursor-pointer object-contain"
                                onClick={() => {
                                    const postObject = {
                                        postId: String(postId),
                                        title,
                                        content,
                                        timestamp: String(timestamp),
                                        likes_count: String(likes_count),
                                        comments_count: String(comments_count),
                                        vaultId,
                                        groupId,
                                        username,
                                    };
                                    router.push(`/dashboard/post/${postId}?${new URLSearchParams(postObject).toString()}`);
                                }}
                                />
                            {/* <Image src="/assets/repost.svg" alt="repost" width={24} height={24} className="cursor-pointer object-contain"/>
                            <Image src="/assets/share.svg" alt="share" width={24} height={24} className="cursor-pointer object-contain"/> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <p className="mt-2 text-small-regular text-sm text-light-2 font-semibold">
            {formatDateString(timestamp)}
            {" "} | {" "} 
            <Link href={`/dashboard/community/${groupId}`}>
                GroupID: {groupId}
            </Link>
        </p>
    </article>
    )
}

export default PostCard;