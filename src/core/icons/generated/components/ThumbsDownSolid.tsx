import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ThumbsDownSolid.svg';

export function ThumbsDownSolid(props: TProps) {
  return (
    <Icon {...props} name="ThumbsDownSolid">
      <SVG />
    </Icon>
  );
}
