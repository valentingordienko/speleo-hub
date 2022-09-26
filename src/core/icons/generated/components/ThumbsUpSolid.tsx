import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ThumbsUpSolid.svg';

export function ThumbsUpSolid(props: TProps) {
  return (
    <Icon {...props} name="ThumbsUpSolid">
      <SVG />
    </Icon>
  );
}
