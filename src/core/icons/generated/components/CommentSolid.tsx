import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/CommentSolid.svg';

export function CommentSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="CommentSolid">
      <SVG />
    </Icon>
  );
}
