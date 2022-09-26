import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ErrorTriangleSolid.svg';

export function ErrorTriangleSolid(props: TProps) {
  return (
    <Icon {...props} name="ErrorTriangleSolid">
      <SVG />
    </Icon>
  );
}
