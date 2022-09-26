import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ErrorTriangleOutline.svg';

export function ErrorTriangleOutline(props: TProps) {
  return (
    <Icon {...props} name="ErrorTriangleOutline">
      <SVG />
    </Icon>
  );
}
