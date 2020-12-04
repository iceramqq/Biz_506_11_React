import { createContext } from "react";

/**
 * context providor
 * react의 parents -> child -> child -> child 처럼
 * 중첩되는 컴포넌트 계층에서
 *
 */
const BookContext = createContext();
export default BookContext;
