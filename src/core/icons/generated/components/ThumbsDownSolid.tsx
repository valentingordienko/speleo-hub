import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ThumbsDownSolid.svg';

export function ThumbsDownSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="ThumbsDownSolid">
      <SVG />
    </Icon>
  );
}
