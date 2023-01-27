import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ThumbsUpSolid.svg';

export function ThumbsUpSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="ThumbsUpSolid">
      <SVG />
    </Icon>
  );
}
