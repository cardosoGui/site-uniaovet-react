import Col from "react-materialize/lib/Col"
const spans = {
  s: 3,
  m: 6,
  l: 9,
  xl: 12
}

const makeColFromSpan = size => ({
  children,
  offset,
  spanSize,
  spanHeight,
  fixedCol,
  color,
  style,
  pull,
  push,
  ...props
}) => (
  <Col
    offset={offset}
    pull={pull}
    push={push}
    s={fixedCol || 12}
    m={fixedCol || 12}
    l={fixedCol || 12}
    xl={spanSize || spans[size]}
    style={{ backgroundColor: color }}
  >
    <span style={{ height: spanHeight, ...style }} {...props}>
      {children}
    </span>
  </Col>
)

export const Lg = makeColFromSpan("lg")
export const Md = makeColFromSpan("md")
export const Sm = makeColFromSpan("sm")
export const Xs = makeColFromSpan("xs")
